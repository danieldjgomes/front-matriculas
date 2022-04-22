
import React, { useState, useEffect} from 'react';
import { ListaDisciplinas } from './componentes/listaDisciplinas';
import turnSVG from './files/svg/turn.svg';
import turnPCSVG from './files/svg/turn-pc.svg';

import { Modal } from "react-bootstrap";

function App() {

  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const [orientation, setOrientation] = useState("");

  useEffect(() => {
    window.addEventListener("resize", ()=>{
      if (window.innerWidth<window.innerHeight) {
        console.log(window.innerWidth<window.innerHeight)
        setOrientation("PORTRAIT")
        disableScroll()
        
      } else {
        setOrientation("LANDSCAPE")
        enableScroll()
      }
    })

  }, []);


  useEffect(() => {
      if (window.innerWidth<window.innerHeight) {
        console.log(window.innerWidth<window.innerHeight)
        setOrientation("PORTRAIT")
        disableScroll()
      } else {
        setOrientation("LANDSCAPE")
        enableScroll()
    
      }},[]
    );


    var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}



  return (
    <div className="App">
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/> 

<div className='justify-content-center'>
<Modal show={orientation == "PORTRAIT" ? true : false} fullscreen={true} className="w-100">
            <Modal.Body>
             <div className='turnAlert text-center'>
            <div>
              <h1>{isMobile ? "Para melhor experiência, vire o aparelho." : "Para melhor experiência, utilize a tela cheia do seu computador."}</h1>
              <img src={isMobile ? turnSVG : turnPCSVG}></img>
            </div>
             </div>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
            </Modal>
            </div>
          <ListaDisciplinas/>
          
    </div>
  );
}
export default App;
