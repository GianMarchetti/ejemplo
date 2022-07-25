// import 'bootstrap/dist/css/bootsrap.min.css';
//import React from 'react';
import CartWidget from "../CartWidget";
import {nav,nv2} from "./navbar.module.css";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown'
import { useContext,Fragment } from "react";
import { CartContext } from "../../Context/CartContext";

let stylesN = { color: 'white', fontWeight: 'bolder',textAlign: 'center', margin: 2,textDecoration:'none'}
let imnav = { height:200, width:200, }
let DropS = {color:'pink'}

const NavbarComponent = () => {
    const {showQuantity} = useContext(CartContext);
    return ( 
        <nav className={nav}>
            <Link to={`/`} ><img src="https://i.ibb.co/C5TcSXP/Whats-App-Image-2021-05-13-at-19-10-47.jpg" alt="icon e-commerce" style={imnav} border="0"/></Link>
            <h1 > Casa Bonita </h1> 
            <div className={nv2}>
                <Dropdown>
                    <Link to={`/`} style={stylesN}>Inicio</Link>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" style={stylesN}>
                            Tienda
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                                <Dropdown.Item><Link to={`/`} style={DropS}>Productos</Link></Dropdown.Item>
                                <Dropdown.Item><Link to={`/Asesorías`} style={DropS}>Asesorías</Link></Dropdown.Item>
                        </Dropdown.Menu>
                    <Link to={`/contact`} style={stylesN}>Contacto</Link>
                    <Link to={`/cart`} style={stylesN}>Carrito</Link>
                    <Link to={`/blog`} style={stylesN}>Blog</Link>
                </Dropdown>
            </div>
            {showQuantity() < 1 ? (
                <Fragment />
            ):( 
                <CartWidget cantidad={showQuantity()} />
            )
            }
        </nav>
    );
}

export default NavbarComponent
