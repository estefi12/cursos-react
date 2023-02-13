import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HelloWorldApp } from './HelloWorldApp';
// import { FirstApp } from './Escritura';
// import { EscrituraEstados } from './EscrituraEstados';
// import { FirstGif } from './MostrarGif';
import './index.css';
import { CounterApp } from './CounterApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp value={ 0 }/>
    {/* <FirstApp title='Hola' /> */}
    {/* <FirstGif /> */}
    {/* <EscrituraEstados /> */}
    {/* <HelloWorldApp /> */}
  </React.StrictMode>
);

