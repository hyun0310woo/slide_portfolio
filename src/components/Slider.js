import React, { useState, useEffect } from "react";
import "../Styles/Slider.css";

const Slider = () => {
  // "count"라는 새로운 상태 값을 정의합니다.

  const [curIdx, count] = useState(0);

  return (
    <div id="container">
      <div className="slide_wrap">
        <div className="slide_box">
          <div className="slide_list clearfix">
            <div className="slide_content slide01">
              <p>{curIdx}</p>
            </div>
            <div className="slide_content slide02">
              <p>2</p>
            </div>
            <div className="slide_content slide03">
              <p>3</p>
            </div>
            <div className="slide_content slide04">
              <p>4</p>
            </div>
            <div className="slide_content slide05">
              <p>5</p>
            </div>
          </div>
          {/* <!-- // .slide_list --> */}
        </div>
        {/* <!-- // .slide_box --> */}
        <div className="slide_btn_box">
          <button
            onClick={() => count(curIdx + 1)}
            type="button"
            className="slide_btn_prev"
          >
            Prev
          </button>
          <button
            onClick={() => count(curIdx - 1)}
            type="button"
            className="slide_btn_next"
          >
            Next
          </button>
        </div>
        {/* <!-- // .slide_btn_box --> */}
        <ul className="slide_pagination"></ul>
        {/* <!-- // .slide_pagination --> */}
      </div>
      {/* <!-- // .slide_wrap --> */}
    </div>
    // <!-- // .container -->
  );
};

export default Slider;
