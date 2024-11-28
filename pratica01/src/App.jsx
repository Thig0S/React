import eu from './assets/PraticamenteEu.webp'
import Mari from './assets/mari.webp'
import Figurinha from './assets/figurinha.webp'
import Figurinha2 from './assets/eu2.webp'
import Header from './Header'
import Card from './Card';
import Footer from './Footer.jsx'

function App() {
    return(<>
      <Header/>
      <div className="mainSection">
        <Card img={eu} name="Thiago" description="Sla estudo programação e gosto de jogos!"></Card>        
        <Card img={Mari} name="Mari" description="Mia namorada Linda que eu amu!"></Card>        
        <Card img={Figurinha} name="Mari 02" description="Mari quando ta brava cmg!"></Card>        
        <Card img={Figurinha2} name="Thiago 02" description="Eu quando a Mari ta brava cmg!"></Card>        
      </div>
      <Footer/>
      </>
    );
}

export default App
