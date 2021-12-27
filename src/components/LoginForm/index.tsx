import { Link } from 'react-router-dom';
import { CgArrowLongLeft } from 'react-icons/cg';

import './styles.scss';

import { Input } from '../../components/Input';
import { Button } from '../Button';

type LoginFormType = {
    ctaButton: string;
    footerCta: string;
    footerCtaLink: string;
    footerCtaLinkPath: string;
}

export function LoginForm(props: LoginFormType) {
    return (
        <section className="form">
            <header>
                <Link to='/'>
                    <img src={require('../../assets/images/logo.png')} alt="YelpCamp" />
                </Link>
                <Link to='/' >
                    <CgArrowLongLeft />
                    <span>Back to campgrounds</span>
                </Link>
            </header>

            <div className="form_content">
                <h1>Start exploring camps from all around the world.</h1>

                <form action="">
                    <label htmlFor="">Username</label>
                    <div className="input">
                        <Input placeHolder='johndoe_91' />
                    </div>

                    <label htmlFor="">Password</label>
                    <div className="input">
                        <Input placeHolder='Enter Your Password' />
                    </div>

                    <Button>{props.ctaButton}</Button>

                </form>

                <div className="create_account">
                    <span>{props.footerCta}</span>
                    <Link to={props.footerCtaLinkPath}>{props.footerCtaLink}</Link>
                </div>
            </div>
        </section>
    )
}