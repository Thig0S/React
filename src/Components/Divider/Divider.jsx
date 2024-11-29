import './Divider.css'

const Divider = (props) =>{
    return(
        <div class="span">
            <div class="divider">
                <span class="divider-text">{props.text}</span>
            </div>
        </div>
    );
}
export default Divider