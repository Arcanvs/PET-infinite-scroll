import { FC } from 'react'
import Result from '../interfaces/result';



const Card: FC<Result> = ({ name, image, status, species, type, episode }) => {
  return (
    <div className="card">
        <div className="card-header">
            <img src={ image } className="card-user-image"/>
            <a className="card-user-name">{ name }</a>
            <div className="card-time">
                {
                    status === 'Alive' ? <>🟢</> : <>🔴</>
                }
            </div>
        </div>
  
        <div className="card-image">
            <img src={ image } height="460px"/>
        </div>
  
        <div className="card-content">
            <p className="episodes">{episode.length} Episodios</p>
            <p>
                <a className="card-content-user">{ name }</a> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem voluptas reprehenderit beatae incidunt saepe voluptatem ipsa odit harum, recusandae fugiat, velit aut pariatur facilis vero assumenda, odio rem officia magni.
            </p>
        </div>
    </div>
  )
}

export default Card