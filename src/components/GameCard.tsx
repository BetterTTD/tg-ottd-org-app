import { FC } from 'react';

type GameCardProps = {
    Title       : string
    ImageSrc    : string
    Players     : string[]
    TrainLenght : number
    Landscape   : string
    MapSize     : string
    GameTypes   : string[]
    SaveFile    : string
    YoutubeLink : string
}

const GameCard : FC<GameCardProps> = (props) => (
    <div className="card text-white bg-secondary mb-3">
        <img src={props.ImageSrc} className="card-img-top" alt="..." />
        <div className="card-body">
            <h3 className="card-title">{props.Title}</h3>
            <div className="row">
                <div className="col col-sm-4">
                    <p className="card-text"><b>Landscape:</b> {props.Landscape}</p>
                </div>
                <div className="col col-sm-4">
                    <p className="card-text"><b>Map Size:</b> {props.MapSize}</p>
                </div>
                <div className="col col-sm-4">
                    <p className="card-text"><b>Train Lenght:</b> {props.TrainLenght}</p>
                </div>
            </div>
            <p className="card-text"><b>Game Type:</b> {props.GameTypes.map((type, id) => <span key={id} className="badge bg-warning text-dark me-1">{type}</span>)}</p>
            <p className="card-text"><b>Players: </b>{props.Players.join(", ")}</p>
        </div>
        <div className="card-footer bg-transparent">
            <a target="_target" href={props.SaveFile} className="btn btn-link" style={{paddingLeft: 0}}>Download <i className="fas fa-download"></i></a>
            {props.YoutubeLink ? <a target="_target" href={props.YoutubeLink} className="btn btn-link">Watch <i className="fab fa-youtube"></i></a> : <></>}
        </div>
    </div>
);

export default GameCard;