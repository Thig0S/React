import './Sobre.css'

const Sobre =()=>{
    return(
        <div className="sobre">
            <form action="">
                <h2>Contato</h2>
                <h3>Fale com a ScheduleTime: </h3>
                <div className="textfield">
                    <label htmlFor="">Nome: </label>
                    <input type="text" />                    
                </div>
                <div className="textfield">
                <label htmlFor="">Email: </label>
                <input type="email" />
                </div>
                <div className="textfield">
                    <label htmlFor="">Assunto: </label>
                    <input type="text" />
                </div>
                <button>Enviar</button>
            </form>
        </div>
    );
}
export default Sobre