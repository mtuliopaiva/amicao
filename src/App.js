import Header from "./components/Header/Header";
import Forms from "./components/Forms/Forms";
import './index.css'
import Cadastrados from "./components/Cadastrados/Cadastrados";
import { useState} from 'react'


function App() {

  const [animais, setAnimais] = useState([])

  const animalAdicionado = (animal) => {
    setAnimais([...animais,animal]);
    console.log(animais)
    
  }

  return (
    <div className="App">
      <Header />
      <Forms animalCadastrado={animal => animalAdicionado(animal)}/>
      <Cadastrados nome="Charles"/>
    </div>
  );
}

export default App;
