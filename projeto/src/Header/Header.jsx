import './Header.css'

function Header(){
    function menuActive(){
        const sideMenu = document.querySelector('.menu-active')
        sideMenu.style.display = 'flex'
    }
    function menuNot(){
        const sideMenu = document.querySelector('.menu-active')
        sideMenu.style.display = 'none'
    }

    return(<>
            <header>
                <h2>Loogo</h2>
                <ul className='menu'>
                    <li><a href="">Home</a></li>
                    <li><a href="">Serviços</a></li>
                    <li><a href="">Sobre nós</a></li>
                </ul>
                <svg onClick={menuActive} xmlns="http://www.w3.org/2000/svg" height="24px" 
                viewBox="0 -960 960 960" width="24px"
                 fill="#5f6368"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                 <div className="menu-active">
                    <ul>
                        <svg onClick={menuNot} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" 
                        width="24px" fill="#5f6368">
                        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 
                        224 224-56 56-224-224-224 224Z"/></svg>
                        
                        <li><a href="">Home</a></li>
                        <li><a href="">Serviços</a></li>
                        <li><a href="">Sobre nós</a></li>
                    </ul>
                 </div>
            </header>
        </>
    );
}
export default Header;