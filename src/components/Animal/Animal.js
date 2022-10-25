// links das imagens dos animais:

// ./imagens/charlie_pug.jpg
// ./imagens/magda_golden.jpg
// ./imagens/pascoal_poodle.jpg
// ./imagens/capitao_pastor.jpg
// ./imagens/tobi_indefinido.jpg
// ./imagens/tomate_dachshund.jpg

import './Animal.css'


const Animal = (props) => {

    return (
        <div className='card'>
            <img src={props.imagem} alt={props.nome}></img>
            <h4>Nome:{props.nome}</h4>
            <p>Raça: {props.raca}</p>
            <p>Idade: {props.idade} anos</p>
            <p>Cor: {props.cor}</p>
        </div>
    )
}

export default Animal