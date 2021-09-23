import { FC } from 'react';
import GameCard from './GameCard';

const gameArchive = [
    {
        Title       : "TG Game 8",
        ImageSrc    : "https://github.com/TG-OpenTTD/tg-ottd-org/blob/main/assets/tg_8.png?raw=true",
        Players     : ["iTKerry", "same-f (aka __Fellini__)", "DixieCyanide", "Rau", "Lebovski", "Saymonnet", "LugnutsK"],
        TrainLenght : 5,
        GameTypes   : ["Cargo", "SRNW Transfer"],
        SaveFile    : "https://drive.google.com/file/d/1OwJqdU2Gwsydwg5KrmHczaKcbbjAb6Ou/view?usp=sharing",
        YoutubeLink : "https://youtube.com/playlist?list=PLWwhxwlFMC9XUYg456Zdj95VsUWDUaxeI"
    }
];

const PublicServer : FC = () => (
    <div className="container">
        {gameArchive.map((game, id) => <GameCard key={id} {...game} />)}
    </div>
);

export default PublicServer;