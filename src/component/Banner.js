import React from "react";
import "./../App.css";

function Banner() {
  return (
    <div className="banner">
        <div className="container">
            <p>Selamat datang di website</p>
            <h1>DEPO TANAMAN</h1>
            <div className="tombol">
            <a href="#about"><button >Selengkapnya</button></a> 
            <a href="#kontakKami"><button >Kontak Kami</button></a>
            </div>
        </div>
    </div>
  );
}

export default Banner;
