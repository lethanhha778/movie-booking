import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BiUserCircle, BiUserPlus, BiMoviePlay, BiCameraMovie } from "react-icons/bi";
import { FaNewspaper } from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";

import '../Header/homeHeader.css'

function Header() {
  return (
    <Navbar expand="md" fixed="top"  >
      <Container fluid >
        <Navbar.Brand href="#" className='img-logo px'>
          <img className="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Sky_Cinema_-_Logo_2020.svg/1200px-Sky_Cinema_-_Logo_2020.svg.png" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='px-3 px-md-0'>
          <Nav
            className="mx-auto  my-lg-0 px menu "
            style={{ maxHeight: '260px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='d-flex flex-md-column align-items-center px-lg-3 '> <BiMoviePlay className='fs-4 ' />Phim</Nav.Link>
            <Nav.Link href="#action2" className='d-flex flex-md-column align-items-center px-lg-3'><BiCameraMovie className='fs-4' />Cụm Rạp</Nav.Link>
            <Nav.Link href="#action3" className='d-flex flex-md-column align-items-center px-lg-3'><FaNewspaper className='fs-4' />Tin Tức</Nav.Link>
            <Nav.Link href="#action4" className='d-flex flex-md-column align-items-center px-lg-3'><FiSmartphone className='fs-4' />Ứng Dụng</Nav.Link>

          </Nav>
          <Nav className="d-flex align-items-center menu fw-bold">
            <Nav.Link href="#action5" className='d-flex align-items-center'><BiUserCircle className='mx-1 fs-4' />Đăng Nhập</Nav.Link>
            <Nav.Link href="#action6" className='d-flex align-items-center'><BiUserPlus className='mx-1 fs-4' />Đăng Ký</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;