import React from "react";
// import animasi
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/source/animate.css";

function About() {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="about-judul">
          <ScrollAnimation
            animateIn="zoomIn"
            animateOut="zoomOut"
            duration={0.4}
          >
            <h1>Depo Tanaman</h1>
          </ScrollAnimation>
        </div>

        <div className="about-content">
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <p>
              Selamat datang di website resmi Depo Tanaman. Depo Tanaman
              merupakan distributor bibit buah dengan kualitas unggul,
              terpercaya, dan harga terjangkau.
            </p>
            <p>
              Temukan berbagai bibit buah terbaik dengan harga terjangkau hanya
              di Depo Tanaman. Anda bisa membelinya melalui website, Tokopedia,
              Shopee, atau bisa membeli langsung ke Toko kami yang berada di
              jalan Mangu-Sambi Km.4, Gelaran, Sobokerto, Ngemplak, Boyolali,
              Jawa Tengah, Indonesia.
            </p>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}

export default About;
