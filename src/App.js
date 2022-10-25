import "./reset.css"
import "./normalize.css"
import Header from "./components/Header/Header";
import Forms from "./components/Forms/Forms";
import './index.css'
import Cadastrados from "./components/Cadastrados/Cadastrados";
import { useState} from 'react'
import Banner from "./components/Banner/Banner";
import Sobre from "./components/Sobre/Sobre";
import QueroAjudar from "./components/QueroAjudar/QueroAjudar";
import Footer from "./components/Footer/Footer";


function App() {

  const [animais, setAnimais] = useState([])

  const animalAdicionado = (animal) => {
    setAnimais([...animais,animal]);
    console.log(animal.nome)
  }

  return (
    <div className="App">
      <Header />
      <Banner />
      <Sobre />
      <QueroAjudar />
      <Forms animalCadastrado={animal => animalAdicionado(animal)}/>
      <Cadastrados animais={animais}/>
      <Footer />

    </div>
  );
}

export default App;
