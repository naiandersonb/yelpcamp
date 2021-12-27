import { GoSearch } from 'react-icons/go';
import {Link} from 'react-router-dom';

import { Button } from '../../components/Button';

import './styles.scss';

export function Jumbotron() {
    return (
        <main className="jumbotron">
            <h1>Welcome to YelpCamp!</h1>
            <span>View our hand-picked campgrounds from all over the world, or add your own.</span>

            <div className="jumbo_form">
                <form>
                    <div className="jumbo_input">
                        <GoSearch className='icon' />
                        <input type="text" placeholder='Search for camps' />
                    </div>
                    <Button>Search</Button>
                </form>
                <Link to='/new-campground' className='add_campground'>Or add you own campground</Link>
            </div>
        </main>
    )
}