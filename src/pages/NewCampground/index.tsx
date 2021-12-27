import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Navbar } from "../../components/Navbar";

import './styles.scss';

export function NewCampground() {
    return(
        <main id="new_campground">
            <section className="container">
                <Navbar/>

                <div className="content">
                    <h1>Add New Campground</h1>

                    <form action="">
                        <label htmlFor="">Campground Name</label>
                        <Input placeHolder="ex.: Seven Sisters Waterfall"/>
                        <label htmlFor="">Price</label>
                        <Input placeHolder="ex.: $149"/>
                        <label htmlFor="">Image</label>
                        <Input placeHolder="ex.: www.exemple.com/img.png"/>
                        <label htmlFor="">Description</label>
                        <textarea placeholder="make a light description of the camping area"></textarea>

                        <Button>Add Campground</Button>
                    </form>
                </div>

                <Footer/>
            </section>
        </main>
    )
}