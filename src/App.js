// import logo from "./logo.svg";
import React from "react";
import Slider from "./components/Slider";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header>
        <h1>제목</h1>
      </header>
      <section className="content">
        <nav>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </nav>
        <main>
          <Slider />
        </main>
        <aside>contactBt</aside>
      </section>
      <footer>hyun0310woo@gmail.com</footer>
    </div>
    // <Slider />
  );
}

export default App;
