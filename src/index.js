import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function Banner() {
  return (
    <div id="banner">
      <img
        id="bannerImg"
        src={require("./img/banner.png")}
        alt="dndLogo"
        width="1000px"
        height="350px"
      />
    </div>
  );
}

function Navbar() {
  return (
    <div id="nav">
      <ul className="navbar">
        <li>
          <NavButtons link="index.html" name="Home" />
        </li>
        <li>
          <NavButtons link="blaze.html" name="Blaze Everhearth" />
        </li>
        <li>
          <NavButtons link="Allie.html" name="Allison Garnet" />
        </li>
        <li>
          <NavButtons link="Hera.html" name="Hera Khan" />
        </li>
        <li>
          <NavButtons link="Marissa.html" name="Marissa Whitethistle" />
        </li>
      </ul>
    </div>
  );
}

function NavButtons(props) {
  return <a href={props.link}>{props.name}</a>;
}

function Heading() {
  return <h1>DnD Characters</h1>;
}

function SlideDiv() {
  return (
    <div className="slideshow-container">
      <Slides number="1" img={require("./img/Marissa.png")} text="Marissa" />
      <Slides number="2" img={require("./img/Blaze.png")} text="Blaze" />
      <Slides number="3" img="{require('./img/Allie.png')}" text="Allie" />
      <Slides number="4" img="{require('./img/Hera.png')}" text="Hera" />
      <SlideButtons text="prev" change="-1" img="&#10094" />
      <SlideButtons text="next" change="1" img="&#10095" />

      <SlideDotsDiv />
    </div>
  );
}

function Slides(props) {

  return <img src={require("./img/Blaze.png")} alt="cum"></img>
  // return (
  //   <div className="mySlides fade">
  //     <div className="numbertext">{props.number} / 4</div>
  //     <img src={props.img} alt={props.text} height="1000px" width="800px" />
  //     <div className="text">{props.text}</div>
  //   </div>
  // );
}

function SlideButtons(props) {
  return (
    <button className={props.text} onClick={props.change}>
      {props.img}
    </button>
  );
}

function SlideDotsDiv() {
  return (
    <div style={{ textAlign: "center" }}>
      <SlideDots slide="1" />
      <SlideDots slide="2" />
      <SlideDots slide="3" />
      <SlideDots slide="4" />
    </div>
  );
}
function SlideDots(props) {
  return <span class="dot" onclick={props.slide}></span>;
}
function SiteContainer() {
  return (
    <>
      <Banner />
      <Navbar />
      <Heading />
      <SlideDiv />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SiteContainer />);
