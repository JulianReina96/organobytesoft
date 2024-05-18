import { useState } from 'react';
import CampoTexto from './components/CampoTexto';
import Formulario from './components/Formulario';
import Banner from './components/banner';
import Time from './components/Time';


function App() {

  const times =[
{
  nome:'Sócios',
  corPrimaria:'#57c278',
  corSecundaria:'#d9f7e9',
},
{
  nome:'Front-End',
  corPrimaria:'#82cffa',
  corSecundaria:'#e8f8ff',
},
{
  nome:'Back-End',
  corPrimaria:'#e06b69',
  corSecundaria:'#fde7e8',
},
{
  nome:'Mobile',
  corPrimaria:'#ffba05',
  corSecundaria:'#fff5d9',
},



  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoCadastrarNovoColaborador = (colaborador) => {
    console.log(colaborador)
  }

  return (
    <div className="App">
<Banner></Banner>
<Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoCadastrarNovoColaborador(colaborador)}></Formulario>

{times.map(times => <Time key={times.nome} nome={times.nome} corPrimaria={times.corPrimaria} corSecundaria={times.corSecundaria}/>)}
    </div>
  );
}

export default App;
