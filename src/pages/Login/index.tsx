import './styles.scss';

import { Testimonial } from '../../components/Testimonial';
import { LoginForm } from '../../components/LoginForm';

export function Login() {
    return(
        <main id="login">
            <section className="container">
                <section className="form_container">
                    <LoginForm 
                        ctaButton='Login'
                        footerCta='Not user yet?'
                        footerCtaLink='Create an account'
                        footerCtaLinkPath='/create-account'
                    />
                </section>

                <section className="testimonial">
                    <Testimonial/>
                </section>

            </section>
        </main>
    )
}