import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="wall">
        <div style={{top: "0px",left: "0px"}}><img src="/imgs/1678610494809.jpg" alt=""/></div>
        <div style={{top: "0px",left: "280px"}}><img src="/imgs/1678610530719.jpg" alt=""/></div>
        <div style={{top: "320px",left: "40px"}}><img src="/imgs/1678610566190.jpg" alt=""/></div>
        <div style={{top:"290px",left:"170px"}}><img src="/imgs/1678610594359.jpg" alt=""/></div>
        <div style={{top:"240px",left:"330px"}}><img src="/imgs/1678610625796.jpg" alt=""/></div>
        <div style={{top:"170px",left:"210px"}}><img src="/imgs/1678610642837.jpg" alt=""/></div>
        <div style={{top:"450px",left:"240px"}}><img src="/imgs/1678610660011.jpg" alt=""/></div>
        <div style={{top:"140px",left:"730px"}}><img src="/imgs/1678610674387.jpg" alt=""/></div>
        <div style={{top:"490px",left:"10px"}}><img src="/imgs/1678610698828.jpg" alt=""/></div>
        <div style={{top:"0px",left:"230px"}}><img src="/imgs/1678610716303.jpg" alt=""/></div>
        <div style={{top:"120px",left:"560px"}}><img src="/imgs/1678610736523.jpg" alt=""/></div>
        <div style={{top:"360px",left:"340px"}}><img src="/imgs/1678610775407.jpg" alt=""/></div>
        <div style={{top:"230px",left:"460px"}}><img src="/imgs/1678610791194.jpg" alt=""/></div>
        <div style={{bottom:"0px",left:"510px"}}><img src="/imgs/1678610821602.jpg" alt=""/></div>
        <div style={{top:"30px",left:"1140px"}}><img src="/imgs/1678610848142.jpg" alt=""/></div>
        <div style={{top:"240px",left:"1000px"}}><img src="/imgs/1678610862683.jpg" alt=""/></div>
        <div style={{top:"150px",left:"800px"}}><img src="/imgs/1678610883104.jpg" alt=""/></div>
        <div style={{top:"0px",left:"831px"}}><img src="/imgs/1678610895785.jpg" alt=""/></div>
        <div style={{top:"0px",left:"540px"}}><img src="/imgs/1678610913396.jpg" alt=""/></div>
        <div style={{top:"20px",left:"680px"}}><img src="/imgs/1678610931909.jpg" alt=""/></div>
        <div style={{top:"0px",left:"960px"}}><img src="/imgs/1678610946387.jpg" alt=""/></div>
        <div style={{bottom:"0px",right:"20px"}}><img src="/imgs/1678610968368.jpg" alt=""/></div>
    </div>
  )
}

export default App
