import './CampoTexto.css'


const CampoTexto = (props) => {

    const digitado = (evento) => {
        // console.log(evento.target.value);

        props.alterado(evento.target.value);
    }

    return (
        <>
            <label htmlFor={props.label}>{props.label}:  </label>
            <input value={props.valor} onChange={digitado} type="text"></input>
        </>
    )
}

export default CampoTexto