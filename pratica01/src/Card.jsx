
import './Card.css'
function Card(props){
    return(
        <>
        <div className="card">
            <img src={props.img} alt="" />
            <h2>{props.name}</h2>
            <p>{props.description}</p>
        </div>
        </>
        
    );
}

export default Card