import PropTypes from 'prop-types'
function Islogged(props){
    
    const welcomeMessage = <h2 className="logado">Bem-vindo {props.name}!</h2>
    const loginPrompt = <h2  className="naoLogado">Usuário não Logado!</h2>

    return(props.logado ? welcomeMessage : loginPrompt);
}
Islogged.prototype ={
    logado : PropTypes.bool,
    name : PropTypes.string,
}
Islogged.defaultProps = {
    logado: false,
    name: "usuário"
}
export default Islogged