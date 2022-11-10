import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";


function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2500); 
}




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

let slideIndex =1;

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
    <div class="slideshow-container">
     
      <div class="mySlides fade">
        <div class="numbertext">1 / 4</div>
        <img
          src={require("./img/Marissa.png")}
          style={{ width: "80%" }}
          alt="Marissa"
        />
        <div class="text">Marissa</div>
      </div>

      <div class="mySlides fade">
    <div class="numbertext">2 / 4</div>
    <img src={require("./img/Blaze.png")} style={{width:"80%"}} alt="Blaze"/>
    <div class="text">Blaze</div>
  </div>

  <div class="mySlides fade">
    <div class="numbertext">3 / 4</div>
    <img src={require("./img/Allie.png")} style={{width:"80%"}} alt="Allie"/>
    <div class="text">Allie</div>
  </div>

  <div class="mySlides fade">
    <div class="numbertext">4 / 4</div>
    <img src={require("./img/Hera.png")} style={{width:"80%"}} alt="Hera"/>
    <div class="text">Hera</div>
  </div>

      <button class="prev" onclick="plusSlides(-1)">
        &#10094;
      </button>
      <button class="next" onclick="plusSlides(1)">
        &#10095;
      </button>
    </div>
  );
}

// function Slides(props) {
//   return <img src={require("./img/Blaze.png")} alt="cum"></img>;
//   // return (
//   //   <div className="mySlides fade">
//   //     <div className="numbertext">{props.number} / 4</div>
//   //     <img src={props.img} alt={props.text} height="1000px" width="800px" />
//   //     <div className="text">{props.text}</div>
//   //   </div>
//   // );
// }

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


// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }

window.onload = () => {
  showSlides();
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
