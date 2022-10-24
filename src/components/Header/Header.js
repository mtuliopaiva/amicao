import './Header.css'

const Header = () => {
    return(
        <header>
            <img src='./imagens/logo.png' alt='Logotipo da página amicão'></img>
            <nav className='container'>
                <ul>
                    <a href="#"><li>Home</li></a>
                    <a href="#"><li>Sobre</li></a>
                    <a href="#"><li>Quero ajudar!</li></a>
                    <a href="#"><li>Divulgue um Amicão</li></a>
                </ul>
            </nav>
        </header>
    )
}

export default Header