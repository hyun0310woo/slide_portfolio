import React, {useState} from "react";
import "./slider.scss"
import Test from "./Test"

function Slider() {
    console.log(Test)
    let sliderArr = [Test,2,3,4,5];

    const [x, setX] = useState(0)

    const goLeft = () => {
        x === 0 ? setX( -100 * (sliderArr.length - 1)) : setX(x + 100);
    }

    const goRight = () => {
       (x === -100 * (sliderArr.length - 1)) ? setX(0) : setX(x - 100);
    }

    return(
        <div className="slider">
            {sliderArr.map((item, index) => {
                return(
                    <div key={index} className="slide" style={{transform: `translateX(${x}%)`}}>
                        {item}
                    </div>
                )
            })}
            <button  id="goLeft" onClick={goLeft}><p>left</p></button>
            <button   id="goRight" onClick={goRight}><p>right</p></button>
            
        </div>
    )
}

export default Slider;