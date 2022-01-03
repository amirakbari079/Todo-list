import { Link, NavLink, Routes } from 'react-router-dom'
import DoneTasks from '../pages/DoneTasks'
import './Header.css'
const Header = () => {
    return (
        <header>
            <Link to="/DoneTasks">don</Link>
            <Link to="/UnDoneTasks">unDon</Link>

        </header>
    )
}

export default Header
