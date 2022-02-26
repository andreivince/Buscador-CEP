import React, { useState } from 'react' /*Sempre?*/
import './App.css' /*Importando o CSS*/
import { FiSearch } from 'react-icons/fi' /*Isso aqui serve para importar o icon, o /fi é porque é as primeiras letras do icon*/
import api from "./services/api"
/*Aqui é a base*/

const App = () => {

  const [input, setInput] = useState("") /*O segundo valor, setinput é para passar um novo valor*/ /*Já o primeiro é apenas para saber o valor do input*/
  const [cep, setCep] = useState({})

  async function handleSearch(){ /*Modo de pesquisa de API*/
    if(input === ''){
      alert("Preencha o seu CEP")
      return;
    }

    try {
      const response = await api.get(`${input}/json`)
      setCep(response.data)
      setInput("")
    }catch {
      alert("Opss a busca falhou")
      setInput("")
    }
  }

/*Normal HTML*/
  return ( 
    <div className="container">
      <h1 className='title'>Buscador de CEP</h1>

      <div className='containerInput'>
        <input 
        type="text" 
        placeholder='Digite seu CEP'
        value={input} /*O valor está associado ao input*/
        onChange={(e) => setInput(e.target.value)} /*Para dar o valor ao input*/ /*O evento ocorre e para descobrir o valor dele se coloca e.target.value*/
        >
        </input>
      <button className='botao' onClick={handleSearch}> 
        <FiSearch /*Renderizando o ICON*//> 
      </button>
      </div>

    {Object.keys(cep).length > 0 && ( //Só vai aparecer depois de colocar o CEP
      <div className='main'>
      <h2>CEP: {cep.cep}</h2>
      <span> {cep.logradouro}</span>
      <span> {cep.bairro}</span>
      <span> {cep.localidade}</span>
      <span> {cep.uf}</span>
    </div>
    )}
    </div>
   );
}
 
/*Normal HTML*/

export default App; /*Sempre colocar*/