import './Card.css'

import Line from '../Line/Line';

const Card = (props) =>{

    return(        
        <div className="card">
            <h2>{props.proposta}</h2>
            <Line/>
            <p>{props.descricao}</p>
        </div>);
}
export default Card