import { Link, NavLink, Routes } from 'react-router-dom'
import logo from '../img/1.jpg'
import './Header.css'
const Header = () => {
    return (
        <header>
            <img src={logo} width={40}/>  
            <p >AMIr  Akbari</p>
            <Link className='item' to="/">Home</Link>
            <Link  className='item' to="/about-us">About Us</Link>


        </header>
    )
}

export default Header
