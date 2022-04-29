import React, {useEffect, useState} from 'react'
import {Navbar, Nav } from 'react-bootstrap'

import logoBlack from '../media/s-black.png';
import logoWhite from '../media/s-white.png';

export default function Bar(props) {
  const [status, setStatus] = useState("top");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  // console.log(window.location)

  // function refreshPage() {
  //   window.location.reload(false);
  // }

  // funtion to disapear navbar on scroll down, bring back on scroll up
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    // setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);
    setVisible((prevScrollPos > currentScrollPos) || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    const listener = document.addEventListener("scroll", e => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 50) {
          setStatus("bottom");
      } else {
          setStatus("top");
      }
    }, {passive: true});

    return () => document.removeEventListener("scroll", listener);
  }, []);

  // listens on scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  //<button className="link" onClick={changeState}> CLICK TO CONTACT ></button>
  return (
    <Navbar expand="lg" fixed="top" variant="dark" style={{
        transition: '0.4s ease',
        backgroundColor: status === "top" ? "rgba(26,71,92,0)" : "#FEFEFA",
        position: "fixed",
        variant: "dark",
        height: '60px',
        top: visible ? '0' : '-60px',
        expand: 'sm'
      }}>
      <Navbar.Brand>
        <Nav.Link href="https://sign.simpleservices.org" target="_blank">
          <img className="logo" src={status === "top" ? logoWhite : logoBlack} alt="img"/>
        </Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toggler-icon" style={{backgroundImage: status === "top" ? `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")` : `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAAALElEQVRIiWNgGAWDHTAyMDD8p4dFTPSwZBSMgoEBo/loFIwCysFoPhoF9AcAWbMDB4C5ovcAAAAASUVORK5CYII=")`}}></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end ml-auto">
          <Nav.Link className="nav-link" href="https://simpleservices.org" target="_blank" style={{transition: status === "top" ? "0s ease" : "1s ease", color: status === "top" ? "white" : "black", backgroundColor: status === "top" ? "rgba(26,71,92,0)" : "#FEFEFA"}}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
