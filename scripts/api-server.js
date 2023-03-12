import fs from "fs";
import path from "path";
import bodyParser from "body-parser";
import cors from "cors";

export const apiServerPlugin = (apiMap) => ({
  name: "configure-server",
  configureServer(server) {
    const apis = Object.keys(apiMap);
    if (apis.length === 0) return;

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
