import React, { useState } from 'react';

function Dv() {

    const [isHover, setHover] = useState(false);

    function onHeverHandler(){
        setHover((prev)=>{
            return !prev;
        });
    }

  return (
    <div className='box' style={{backgroundColor: isHover? "black" : "white"}} onMouseEnter={onHeverHandler} ></div>
  );
}

export default Dv;




