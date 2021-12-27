import './styles.scss';

import { Navbar } from "../../components/Navbar";
import { Jumbotron } from '../../components/Jumbotron';
import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';

export function Home() {
    return (
        <section id="home">
            <div className="container">
                <Navbar />
                <Jumbotron />

                <section className="campgrounds">
                    <Card
                        imgUrl={require('../../assets/images/CampImages/CompressedImages/MountUlap.jpg')}
                        title='Mount Ulap'
                        description='One of the monst famous hikes in Benguet is Mt Ulap in Itogon.'
                    />

                    <Card
                        imgUrl={require('../../assets/images/CampImages/CompressedImages/CalaguasIsland.jpg')}
                        title='Calaguas Islands'
                        description='A paradise of islands that can rival the white sand beauty of Boracay.'
                    />

                    <Card
                        imgUrl={require('../../assets/images/CampImages/CompressedImages/OnayBeach.jpg')}
                        title='Onay Beach'
                        description='This is one of the best beach camping sites, beautiful and pristine.'
                    />

                    <Card
                        imgUrl={require('../../assets/images/CampImages/CompressedImages/SevenSistersWaterfall.jpg')}
                        title='Seven Sisters Waterfall'
                        description='The Seven Sisters is the 39th tallest waterfall in Norway.'
                    />

                    <Card
                        imgUrl={require('../../assets/images/CampImages/CompressedImages/LatikRiverside.jpg')}
                        title='latik Riverside'
                        description='Philippines is one of the most dazzling countries in all of Asia.'
                    />

                    <Card
                        imgUrl={require('../../assets/images/CampImages/CompressedImages/BuloySprings.jpg')}
                        title='Buloy Springs'
                        description='This is one of the best beach camping sites, beautiful and pristine.'
                    />
                </section>

                <Footer/>
            </div>
        </section>
    )
}