import './Home.css'
import Img from '/src/assets/imgHome.png'

//Components
import Divider from '../Divider/Divider';
import Card from '../Card/Card';

const Home = () =>{

    return(
        <>
        <div className="Home">
            <div className="containerLeft">
                <h3>Tudo no Seu Tempo</h3>
                <hr />
                <h2>Seu Sistema de Agendamento ScheduleTime!</h2>
                <p>Aqui, você pode agendar de forma prática e rápida o uso dos laboratórios da Rede TK para suas atividades acadêmicas, 
                    profissionais ou de pesquisa. Nossa plataforma foi desenvolvida para facilitar a gestão de horários,
                    permitindo que você escolha o momento mais conveniente para realizar seus trabalhos e aulas sem complicações.</p>
                    <button>Saiba Mais</button>
            </div>
            <div className="containerRight">
                <img src={Img} alt="" />
            </div>
        </div>
        <Divider text="Nossa Proposta"/>
        <div className="containerCards">
            <Card proposta="Facilidade:" descricao="Agendar seus exames nunca foi tão simples. Com nossa plataforma online, você pode agendar suas aulas em salas e laboratoratórios de forma prática e rápida, diretamente do seu computador ou celular."/>
            <Card proposta="Disponibilidade:" descricao="Oferecemos uma plataforma segura para o gerenciamento de reservas, evitando conflitos e garantindo que as informações de reservas sejam precisas."/>
            <Card proposta="Segurança e Confiança:" descricao="Oferecemos uma plataforma segura e eficiente para o gerenciamento de agendamentos de exames laboratoriais, garantindo uma experiência sem conflitos e com informações precisas."/>
        </div>
        </>
    );

}

export default Home