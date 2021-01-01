import React from "react";
import "./../App.css";
// import animasi
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/source/animate.css";

function Banner() {
  return (
    <div className="banner" id="home">
      <div className="container">
        <ScrollAnimation animateIn="lightSpeedInLeft">
          <p>Selamat datang di website</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="pulse" duration={0.7} delay={200}>
          <h1>DEPO TANAMAN</h1>
        </ScrollAnimation>
        <div className="tombol">
          <ScrollAnimation
            animateIn="bounceInUp"
            animateOut="bounceOutDown"
            delay={300}
          >
            <a href="#about">
              <button>Selengkapnya</button>
            </a>
            <a href="#kontak">
              <button>Kontak Kami</button>
            </a>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}

export default Banner;
