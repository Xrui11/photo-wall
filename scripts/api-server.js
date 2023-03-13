import fs from "fs";
import path from "path";
import bodyParser from "body-parser";
import cors from "cors";
import multer from "multer";
import crypto from 'crypto';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads')
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(16, function (err, raw) {
      cb(err, err ? undefined : (raw.toString('hex') + path.extname(file.originalname)))
    })
  }
})

export const apiServerPlugin = (apiMap) => ({
  name: "configure-server",
  configureServer(server) {
    const apis = Object.keys(apiMap);
    if (apis.length === 0) return;

    const upload = multer({ storage });

    server.middlewares.use(
      cors({
        origin: "*",
        methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
      })
    );
    server.middlewares.use(bodyParser.json({ limit: "50mb" }));
    server.middlewares.use(
      bodyParser.urlencoded({ limit: "50mb", extended: true })
    );
    server.middlewares.use(upload.single("file"));
    server.middlewares.use((req, res, next) => {
      const index = apis.indexOf(req._parsedUrl.pathname);
      if (index > -1) {
        const asyncFunc = apiMap[apis[index]];
        asyncFunc(req, res).then((data) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.write(JSON.stringify(data));
          res.end();
        });
        return;
      }
      next();
    });
  },
});
