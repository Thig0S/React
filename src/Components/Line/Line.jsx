
const Line= () =>{

    const style = {
        width: '100%', // Define a largura da linha
        height: '4px', // Define a espessura da linha
        backgroundColor: 'purple', // Define a cor da linha
        margin: '16px 0', // Adiciona espaçamento ao redor da linha
      };

    return(
        <div className="line" style={style}></div>
    );
}

export default Line