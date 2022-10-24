
import Animal from '../Animal/Animal'
import './Cadastrados.css'



const Cadastrados = (props) => {

    return(
        <div>
            
            <div className='animais__cadastrados'>  
            {props.animais.map(animal => 
                <Animal key={animal.nome}
                    nome={animal.nome}
                    raca={animal.raca}
                    idade={animal.idade}
                    cor={animal.cor}
                    imagem={animal.imagem}
                    
            />)}               
                
                </div>
        </div>

    )
}

    export default Cadastrados
