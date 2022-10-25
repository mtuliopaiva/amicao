import './Sobre.css'

const Sobre = () => {
    return(
        <div className='sobre'>
            <div className='container'>
                <h2>Sobre</h2>
                <p>O AmiCão é um website em que ONGs e Protetores de 
                    todo o Brasil podem divulgar cães para adoção. Nosso 
                    projeto existe desde 2008, onde conectados pessoas, cães
                    para adoção e lares cheios de amor.</p>
                <div className='sobre__conteudo'>
                    <div className='sobre__conteudo--texto'>
                            <h3>Como funciona?</h3>
                            <p>1 - ONGs ou protetores realizam o seu cadastro gratuitamente e já podem publicar os 
                                animais com suas características e personalidades.</p>
                            <p>2 - Pessoas que estão interessadas em ter um novo Pet buscam no site um que tenha a ver com o perfil dele.</p>
                            <p>3 - Quando encontrar o bichinho especial, clique em "quero adotar!" e pronto, a ONG ou protetor irá entrar em contato
                                para combinar os detalhes.</p>
                    </div>
                    <div className='sobre__conteudo--imagem'>
                        <img src='./imagens/sobre.jpg' alt='A imagem descreve um homem com um cachorro'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sobre