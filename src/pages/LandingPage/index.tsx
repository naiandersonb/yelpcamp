import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

import './styles.scss';
import { Button } from '../../components/Button';

export function LandingPage() {
    return(
        <section className='landingPage'>
            <div className="logo">
                <Link to='/'>
                    <img src={require('../../assets/images/logo.png')} alt="YelpCamp" />
                </Link>
            </div>
            <div className="hero_content">
                <div className="hero_content_container">
                    <h1>
                        Explore the best camps on Earth.
                    </h1>
                    <p>
                        YelpCamp is a curated list of the best camping spots on Earth. Unfiltered and unbiased reviews.
                    </p>

                    <ul>
                        <li><FaCheckCircle className='hero_icon'/> Add your own camp suggestions.</li>
                        <li><FaCheckCircle className='hero_icon'/> Leave reviews and experiences.</li>
                        <li><FaCheckCircle className='hero_icon'/> See locations for all camps.</li>
                    </ul>
                    
                    <div className="bnt_container">
                        <Link to='/home'>
                         <Button>View Campgrounds</Button>
                        </Link>
                    </div>

                    <div className="hero_footer">
                        <p>Partnered with:</p>
                        <div className="hero_footer_imgs">
                            <img src={require('../../assets/images/airbnb.png')} alt="logo airbnb" />

                            <img src={require('../../assets/images/booking.png')} alt="logo airbnb" />
                            
                            <img src={require('../../assets/images/plum-guide.png')} alt="logo airbnb" />
                        </div>
                    </div>

                </div>

            </div>
            <div className="hero_img"></div>
        </section> 
    )
}