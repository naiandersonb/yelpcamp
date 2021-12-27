import { Link } from 'react-router-dom';

import './styles.scss';

export function Footer() {
    return(
        <footer>
            <Link to='#'>
                <img src={require('../../assets/images/logo.png')} alt="YelpCamp" />
            </Link>
        </footer>
    )
}