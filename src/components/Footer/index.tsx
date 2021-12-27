import { Link } from 'react-router-dom';

import './styles.scss';

export function Footer() {
    return(
        <footer>
            <Link to='/home'>
                <img src={require('../../assets/images/logo.png')} alt="YelpCamp" />
            </Link>
        </footer>
    )
}