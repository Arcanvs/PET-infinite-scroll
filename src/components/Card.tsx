import { FC } from 'react'
import Result from '../interfaces/result';



const Card: FC<Result> = ({ name, image, status, species, episode }) => {
  return (
    <div className="card">
        <div className="card-header">
            <img src={ image } className="card-user-image"/>
            <a className="card-user-name">{ name }</a>
            <div className="card-time">
                {
                    status === 'Alive' ? <span className="material-symbols-outlined">heart_check</span> : 
                    status === 'Dead' ? <span className="material-symbols-outlined">deceased</span> :
                    <span className="material-symbols-outlined">mystery</span>
                }
            </div>
        </div>
  
        <div className="card-image">
            <img src={ image } width="100%"/>
        </div>
  
        <div className="card-content">
            <p className="episodes">{episode.length} Episodios</p>
            <p>
                <a className="card-content-user">{ name }</a> is a { species }
            </p>
        </div>
    </div>
  )
}

export default Card