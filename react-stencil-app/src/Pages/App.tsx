import React from 'react';
import { TheComponent } from '../components/stencil-generated';
import { Iopts } from '../Types/Opts';
import './App.css';

function App() {
  const obj: Iopts[] = [ 
    {
      id:0,
      nomeOpt: "Opções de display",
      descOpt: "Opções de layout da tela",
      subOpts: [{label: 'nem sei', value:'valor'}, {label: 'ja sei', value:'valor'}, {label: 'shakalaka', value:'valor'}, {label: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys', value:'valor'}, {label: 'Hadoken', value:'valor'}],
      hide: true
    },
    {
      id:1,
      nomeOpt: "Usuario2",
      descOpt: "Torrada é ruim pra cacete",
      subOpts: [{label: 'nem sei', value:'valor'}, {label: 'ja sei', value:'valor'}, {label: 'shakalaka', value:'valor'}],
      hide: true
    },
    {
      id:2,
      nomeOpt: "Usuario3",
      descOpt: "Pamonha",
      subOpts: [{label: 'nem sei', value:'valor'}, {label: 'ja sei', value:'valor'}],
      hide: true
    },
    {
      id:3,
      nomeOpt: "Opções diversas",
      descOpt: "Configuracoes de carater diverso",
      subOpts: [{label: 'Mandar todo mundo pra puta que vos pariu', value:'valor'}],
      hide: true
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <div className='App-flex'>
          <div>
            <h1>Aplicação exemplo</h1>
            <p>
              Site de exemplo
            </p>
          </div>
          <div>
            <TheComponent titulo-tag="Sankhya" opts={obj}></TheComponent>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
