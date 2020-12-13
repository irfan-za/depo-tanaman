import React,{useState, useRef, useEffect} from "react";
import "./../App.css"
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLeaf,faHome,} from "@fortawesome/free-solid-svg-icons"

function Navs() {

const [navBackground, setNavBackground] = useState(false)
    const navRef = useRef()
    navRef.current = navBackground
    useEffect(() => {
      const handleScroll = () => {
        const show = window.scrollY > 0
        if (navRef.current !== show) {
          setNavBackground(show)
        }
      }
      document.addEventListener('scroll', handleScroll)
      return () => {
        document.removeEventListener('scroll', handleScroll)
      }
    }, [])
  return (
    <div >
      <Navbar className="ini-navbar" style={{
        transition: '.6s ease-in',
        backgroundColor: navBackground ? '#156B39' : 'transparent',
        boxShadow: navBackground ? "0 3px 10px rgba(0, 0, 0, 0.5)" : "none",
        // background: "#050510",
        background: "transparent"
    }} fixed='top'  expand="md">
          <div className="container" >
        <Navbar.Brand className='navbar-brand' style=
        {{color:'#45FF00',
        fontSize:"30px"
}}  href="#home"><span className='navbar-brandnya' style=
        {{
        fontSize:'32px',
        fontFamily: `'Rubik', sans-serif`,
        letterSpacing:'2px',
  fontWeight:"bold"}} >DEPO TANAMAN</span><FontAwesomeIcon style={{transform: `translateY(-3px)`}} icon={faLeaf} /></Navbar.Brand>
        <Navbar.Toggle style={{
          outline:'none',
      border:"2px solid #fff",
      filter: "drop-shadow(0 0 6px white)"}} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ml-auto navlink" >
            <a style={{color: navBackground? '#AEFEB3' : "#fff",
            
         }} href=""><span><FontAwesomeIcon icon={faHome}/></span> HOME</a>
            <a style={{color: navBackground? '#AEFEB3' : "#fff",
            
         }} href="#about">ABOUT</a>
            <a style={{color: navBackground? '#AEFEB3' : "#fff",
            
         }} href="#bibit">BIBIT</a>
            <a style={{color: navBackground? '#AEFEB3' : "#fff",
            
         }} href="#kontak">KONTAK KAMI</a>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default Navs;
