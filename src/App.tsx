import { useState } from 'react'

import logoImg from './assets/logo.png'
import './App.css'

function App() {

  return (
    <div className="container">
      <img className="logo" src={logoImg} alt="logo image" />

      <h2 className="title">Gerador</h2>

      <section className='buttons-categoria'>
        <button className='btn_categoria'>Bom dia</button>
        <button className='btn_categoria'>Boa noite</button>
        <button className='btn_categoria'>Esperança</button>
        <button className='btn_categoria'>Engraçada</button>
      </section>

      <button className="btn_gerar">Gerar</button>

      <p className="frase-gerada">"Esse aqui é um exeplo de texto gerado pela a aplicação"</p>

    </div>
  )
}

export default App
