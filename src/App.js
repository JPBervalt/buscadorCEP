import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles.css'

import apiURL from './services/api';

function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});
  async function handleSearch(){
    if(input === '' ){
      alert("O campo é obrigatório!");
      return;
    }
    try{
      const response = await apiURL.get(`${input}/json`);
      //console.log(response.data.bairro);
      setCep(response.data)
      setInput("");
    }catch{
      alert("Erro ao buscar CEP!");
      setInput("");
    }
  }
  return (
    <div className="container">
          <h1 className="title">Buscador de CEP</h1>

          <div className="containerInput">
              <input 
              type="text"
              placeholder="Digite o CEP..."
              VALUE={input}
              onChange={(event)=>setInput(event.target.value)}/>

              <button className="searchButton" onClick={handleSearch}>
              <FiSearch size={25} color="#FFF"/></button>
                 
          </div>
          {Object.keys(cep).length > 0 && (
            <main className="main">
              <h2>CEP: {cep.cep}</h2>
              <span>Rua: {cep.logradouro}</span>
              <span>Complemento: {cep.complemento}</span>
              <span>Bairro: {cep.bairro}</span>
              <span>Cidade: {cep.localidade}</span>
             <span>Estado: {cep.uf}</span>

            </main>
          )}
          
          
    </div>
  );
}

export default App;
