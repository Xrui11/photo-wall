import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="wall">
      <div className="img1"></div>
      <div className="img2"></div>
      <div className="img3"></div>
      <div className="img4"></div>
      <div className="img5"></div>
      <div className="img6"></div>
      <div className="img7"></div>
      <div className="img8"></div>
      <div className="img9"></div>
      <div className="img10"></div>
      <div className="img11"></div>
      <div className="img12"></div>
      <div className="img13"></div>
      <div className="img14">
        <div className="img14-wrap"><img src="/imgs/p1.jpg" alt="" /></div>
      </div>
      <div className="img15">
        <div className="img15-wrap"><img src="/imgs/p1.jpg" alt="" /></div>
      </div>
      <div className="img16">
        <div className="img16-wrap"><img src="/imgs/p1.jpg" alt="" /></div>
      </div>
      <div className="img17">
        <div className="img17-wrap"><img src="/imgs/p1.jpg" alt="" /></div>
      </div>
      <div className="img18">
        <div className="img18-wrap"><img src="/imgs/p1.jpg" alt="" /></div>
      </div>
      <div className="img19">
        <div className="img19-wrap"><img src="/imgs/p1.jpg" alt="" /></div>
      </div>
      <div className="img20">
        <div className="img20-wrap"><img src="/imgs/p1.jpg" alt="" /></div>
      </div>
      <div className="img21">
        <div className="img21-wrap"><img src="/imgs/p1.jpg" alt="" /></div>
      </div>
      <div className="img22"></div>
    </div>
  );
}

export default App;
