
import Animal from '../Animal/Animal'
import './Cadastrados.css'



const Cadastrados = (props) => {

    return(
        <div>
            <h2>Animais cadastrados para adoção:</h2>
            <div className='animais__cadastrados'>                   
                <Animal 
                    nome={props.nome}
                    raca="Pug"
                    idade="5"
                    cor="Preta"
                    imagem="./imagens/charles_pug.jpg"
                    />
                </div>
        </div>

    )
}

    export default Cadastrados
