import { FC } from 'react';

type GameCardProps = {
    Title       : string
    ImageSrc    : string
    Players     : string[]
    TrainLenght : number
    GameTypes   : string[]
    SaveFile    : string
    YoutubeLink : string
}

const GameCard : FC<GameCardProps> = (props) => (
    <div className="card text-white bg-secondary mb-3">
        <div className="card-body">
            <h3 className="card-title">{props.Title}</h3>
            <img src={props.ImageSrc} className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text"><b>Players: </b>{props.Players.join(", ")}</p>
                <div className="row">
                    <div className="col col-sm-3">
                        <p className="card-text"><b>Train Lenght:</b> {props.TrainLenght}</p>
                    </div>
                    <div className="col col-sm-6">
                        <p className="card-text"><b>Game Type:</b> {props.GameTypes.map((type, id) => <span key={id} className="badge bg-warning text-dark me-1">{type}</span>)}</p>
                    </div>
                    <div className="col col-sm-3">
                        <div className="btn-group mr-2" role="group">
                            {props.YoutubeLink ? <a target="_target" href={props.YoutubeLink} className="btn btn-danger"><i className="fab fa-youtube"></i></a> : <></>}
                            <a target="_target" href={props.SaveFile} className="btn btn-warning"><i className="fas fa-download"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default GameCard;