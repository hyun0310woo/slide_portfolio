import React from "react";
import "./App.css";


function App() {

  let test = document.querySelector(".container")
  console.log("Test: ",test)
  console.log("???")

  return (
    <div className="container">
<div className="slide_wrap">
<div className="slide_box">
<div className="slide_list clearfix">
<div className="slide_content slide01">
<p>1</p>
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
</div>
<div className="slide_btn_box">
<button type="button" className="slide_btn_prev">Prev</button>
<button type="button" className="slide_btn_next">Next</button>
</div>
<ul className="slide_pagination"></ul>
</div>
</div>


  );
}

export default App;
