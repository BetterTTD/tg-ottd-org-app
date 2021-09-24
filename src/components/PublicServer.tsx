import { FC } from 'react';
import GameCard from './GameCard';
import {default as data} from '../data/publicServerArchive.json';

const PublicServer : FC = () => (
    <div className="container">
        {data.map((game, id) => <GameCard key={id} {...game} />)}
    </div>
);

export default PublicServer;