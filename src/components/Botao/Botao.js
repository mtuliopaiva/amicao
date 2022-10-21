import './Botao.css'


const Botao = (props) => {

    return (
        <>
            <button onClick={props.enviar}>Enviar</button>
        </>
    )
}

export default Botao