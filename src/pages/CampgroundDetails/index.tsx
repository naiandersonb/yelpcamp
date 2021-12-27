import { Link } from 'react-router-dom';
import { FaRegCommentDots } from 'react-icons/fa';

import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";

import './styles.scss';

export function CampgroundDetails() {

    const reviews = [
        {
            name: 'Adam Jones',
            time: '13h ago',
            review: 'Honestly one of the best experiences ever, took uns a while to figure out how to get there but it was amazing!',
        },

        {
            name: 'Isaac Dylan',
            time: '1 day ago',
            review: 'Traveling changes you as a person, you gain more pespective, this is the perfect spot to do that.',
        },

        {
            name: 'Hudson Luca',
            time: '3 days ago',
            review: 'Definitely recommend going there, not too far and not a lot of peope to ruin the experience.',
        },
    ]

    return (
        <main id="Campground">
            <section className="container">
                <Navbar />

                <div className="content">

                    <article className="map">
                        <div className="card">
                            <img src={require('../../assets/images/Map.png')} alt="Map Mount Ulap" />
                        </div>
                    </article>

                    <article className="details">
                        <div className="campground_details card">
                            <img src={require('../../assets/images/CampImages/high-quality-Images/MountUlap.png')} alt="Mount Ulap" />
                            <div className="card_header">
                                <h2>Mount Ulap</h2>
                                <span>$104.99/night</span>
                            </div>
                            <div className="description">
                                <p>
                                    Mount Ulap is a 7.7 kilometer moderately trafficked point-to-point trail located near Tuba, Benguet, Philippines that offers the chance to see wildlife and ins rated as moderate. The trail is primarily used for hiking.
                                </p>
                                <span>Submitted by Andrew Mike</span>
                            </div>
                        </div>

                        <div className="reviews card">
                                {reviews.map((revw, key) => {
                                    return(
                                        <div className="reviews_content">
                                            <div className="header">
                                                <h2>{revw.name}</h2>
                                                <span>{revw.time}</span>
                                            </div>
                                            <p>{revw.review}</p>
                                        </div>
                                    )
                                })}
                            <div className="new_review">
                                <Link to='/comment'>
                                    <FaRegCommentDots/> Leave a review
                                </Link>
                            </div>
                        </div>

                    </article>
                </div>
                <Footer />
            </section>

        </main>
    )
}