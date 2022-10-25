import './Forms.css'
import { useState } from 'react'
import CampoTexto from '../CampoTexto/CampoTexto';
import Botao from '../Botao/Botao';

const Forms = (props) => {

    // Hooks
    const [nome, setNome] = useState('');
    const [imagem, setImagem] = useState('');
    const [raca, setRaca] = useState('');
    const [idade, setIdade] = useState('');
    const [cor, setCor] = useState('');

    const enviarFormulario = (evento) => {
        evento.preventDefault();

        props.animalCadastrado({
            nome,
            imagem,
            raca,
            idade,
            cor
        })

    }

    return (
        <div className='content'>
            <div className='formulario'>

                <h3>Divulgue para adoção:</h3>
                <form>
                    <CampoTexto
                        label="Nome"
                        valor={nome}
                        alterado={valor => setNome(valor)}
                    />
                    <CampoTexto
                        label="Imagem"
                        valor={imagem}
                        alterado={valor => setImagem(valor)}
                    />
                    <CampoTexto
                        label="Raça"
                        valor={raca}
                        alterado={valor => setRaca(valor)}
                    />
                    <CampoTexto
                        label="Idade"
                        valor={idade}
                        alterado={valor => setIdade(valor)}
                    />
                    <CampoTexto
                        label="Cor"
                        valor={cor}
                        alterado={valor => setCor(valor)}
                    />
                    <Botao
                        enviar={enviarFormulario}
                    />

                </form>
            </div>
        </div>
    )
}

export default Forms