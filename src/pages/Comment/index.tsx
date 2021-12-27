import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";

import './styles.scss';

export function Comment() {
    return(
        <main id="comment">
            <section className="container">
                <Navbar/>

                <div className="content">

                    <div className="content_box">
                        <h1>Add New Comment</h1>
                        <p>Description</p>
                        <textarea></textarea>
                        <Button>Post Comment</Button>
                    </div>
                </div>

                <Footer/>
            </section>
        </main>
    )
}