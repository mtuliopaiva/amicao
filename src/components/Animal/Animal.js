import './Animal.css'


const Animal = (props) => {

    return (
        <div className='card'>
            <img src={props.imagem}></img>
            <h4>Nome: {props.nome}</h4>
            <p>Raça: {props.raca}</p>
            <p>Idade: {props.idade} anos</p>
            <p>Cor: {props.cor}</p>
        </div>
    )
}

export default Animal