import './styles.scss';

import { Testimonial } from '../../components/Testimonial';
import { LoginForm } from '../../components/LoginForm';

export function CreateAccount() {
    return(
        <main id="create_account">
            <section className="container">
                <section className="form_container">
                    <LoginForm 
                        ctaButton='Create an account'
                        footerCta='Already a user?'
                        footerCtaLink='Sign in'
                        footerCtaLinkPath='/login'
                    />
                </section>

                <section className="testimonial">
                    <Testimonial/>
                </section>

            </section>
        </main>
    )
}