import React, { useEffect }  from 'react';
import './Gears.css';

function Gears() {
  useEffect(() => {
    const canvas = document.getElementById('binaryCanvas');
    const ctx = canvas.getContext('2d');

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Load background image
    const bg = new Image();
    bg.src = process.env.PUBLIC_URL + '/images/back.png';

    bg.onload = () => {
      ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
    };
  }, []);

  return (
    <canvas
      id="binaryCanvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100%',
        height: '100%',
      }}
    ></canvas>
  );
}

export default Gears;
