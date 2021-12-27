import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

import { Button } from '../Button';

import './styles.scss';
import { useState } from 'react';

export function Navbar() {

    const [active, setActive] = useState<boolean>();

    function handleSetActive() {
        setActive(!active);
    }

    return(
        <header id="navbar">
            <Link to='/home' className='logo'>
                <img src={require('../../assets/images/logo.png')} alt="YelpCamp" />
            </Link>
            <div className='menu_mobile' onClick={handleSetActive} >
                 {active ? <FaTimes  className='icon_menu'/> : <FaBars className='icon_menu'/> }
            </div>
            <nav className={active? 'nav_links active' : 'nav_links' } >
                <Link to='/home'>Home</Link>

                <div className="right_content">
                    <Link to='/login'>Login</Link>
                    <Link to='/create-account'>
                        <Button>Create an account</Button>
                    </Link>
                </div>
            </nav>
        </header>
    )
}