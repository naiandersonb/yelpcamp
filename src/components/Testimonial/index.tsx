import './styles.scss';

export function Testimonial() {
    return (
        <section className="testimonial">
            <div className="testimonial_container">
                <p>
                    “YelpCamp has honestly saved me hours of research time, and the camps on here are definitely well picked and added.”
                </p>
                <div className="author">
                    <div className="avatar">
                        <img src={require('../../assets/images/user_testimonial.png')} alt="user" />
                    </div>
                    <div className="auhor_info">
                        <h3>may Andrews</h3>
                        <p>Professional Hiker</p>
                    </div>
                </div>
            </div>
        </section>
    )
}