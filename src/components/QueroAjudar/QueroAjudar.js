import './QueroAjudar.css'

const QueroAjudar = () => {

    return (
        <div className='quero-ajudar'>
            <div className='container'>
                <h2>Quero Ajudar</h2>
                <p> Através da nossa plataforma, a
                    gente conecta pessoas que querem ter um pet a cães
                    resgatados que precisam de um lar. Desde 2008,
                    já conseguimos transformar a vida de mais de 3 mil
                    animaizinhos com a ajuda de
                    voluntários e doações de pessoas que apoiam nossa causa.
                </p>
                <p> Para nos ajudar você pode:</p>
                <p>1 - Via PIX ou transferência bancária: Entrar em contato via WhatsApp</p>
                <p>2 - Doações recorrentes, em que é possível doar um valor recorrente</p>
                <div className='doacoes'>
                    <h3>Doações recorrentes</h3>
                    <div className='doacoes__recorrentes'>
                        <div className='doacoes__recorrentes--plano'>
                            <img src='./imagens/amigo_ajudar.jpg' alt='A imagem descreve um cachorro claro'></img>
                            <a href='#'><h3>Amigo</h3></a>
                            <a href='#'><p>R$ 10 mensais</p></a>
                        </div>

                        <div className='doacoes__recorrentes--plano'>
                            <img src='./imagens/amigo-especial_ajudar.jpg' alt='A imagem descreve um cachorro caramelo'></img>
                            <a href='#'><h3>Amigão</h3></a>
                            <a href='#'><p>R$ 25 mensais</p></a>
                        </div>

                        <div className='doacoes__recorrentes--plano'>
                            <img src='./imagens/bff_ajudar.jpg' alt='A imagem descreve um cachorro claro correndo atrás de uma bola em uma praia'></img>
                            <a href='#'><h3>BFF</h3></a>
                            <a href='#'><p>R$ 50 mensais</p></a>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default QueroAjudar