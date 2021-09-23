import { FC } from 'react';
import { Link } from 'react-router-dom';

const Home : FC = () => (
    <main className="px-3">
        <h1>Introduction Trailer</h1>
        <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/NsJL1E5oKBM" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        <p className="lead">Welcome to our OpenTTD gaming community. Join us to become a part of something incredible. Get ready for NEW experience!</p>
        <p className="lead">
            <Link to="#" className="btn btn-lg btn-secondary fw-bold border-white bg-white">Learn more</Link>
        </p>
    </main>
);

export default Home;