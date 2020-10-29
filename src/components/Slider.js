import React, { useState } from "react";
import "../Styles/Slider.css";

const Slider = () => {
  // "count"라는 새로운 상태 값을 정의합니다.

  return (
    <div id="container">
      <div class="slide_wrap">
        <div class="slide_box">
          <div class="slide_list clearfix">
            <div class="slide_content slide01">
              <p>1</p>
            </div>
            {/* <div class="slide_content slide02">
              <p>2</p>
            </div>
            <div class="slide_content slide03">
              <p>3</p>
            </div>
            <div class="slide_content slide04">
              <p>4</p>
            </div>
            <div class="slide_content slide05">
              <p>5</p>
            </div> */}
          </div>
          {/* <!-- // .slide_list --> */}
        </div>
        {/* <!-- // .slide_box --> */}
        <div class="slide_btn_box">
          <button type="button" class="slide_btn_prev">
            Prev
          </button>
          <button type="button" class="slide_btn_next">
            Next
          </button>
        </div>
        {/* <!-- // .slide_btn_box --> */}
        <ul class="slide_pagination"></ul>
        {/* <!-- // .slide_pagination --> */}
      </div>
      {/* <!-- // .slide_wrap --> */}
    </div>
    // <!-- // .container -->
  );
};

export default Slider;
