import { Link } from 'react-router-dom';
import { Button } from "../Button";

import './styles.scss';

type CardType = {
    imgUrl: string;
    title: string;
    description: string;
}

export function Card(props: CardType) {
    return(
        <article id="card">
            <div className="card_container">
                <div className="card_img">
                    <img src={props.imgUrl} alt="campground" />
                </div>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <Link to='/campground'>
                    <Button outlined>View Campground</Button>
                </Link>
            </div>
        </article>
    )
}