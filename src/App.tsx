import { useState } from 'react'

import logoImg from './assets/logo.png'
import './App.css'

function App() {

  const [frase, setFrase] = useState("");

  const categorias = [
    {
      id: 0,
      categoria: "Bom dia",
      frase: [
        "Que seu dia seja cheio de alegrias e realizações",
        "Que a felicidade te acompanhe em cada momento",
        "Desejo a você um dia produtivo e cheio de boas energias",
        "Que a esperança renove suas forças e te inspire a seguir em frente",
      ]
    },
    {
      id: 1,
      categoria: "Esperança",
      frases: [
        "A esperança é o sonho do homem acordado",
        "Devemos aceitar a decepção finita, mas nunca perder a esperança infinita",
        "Uma montanha de memórias nunca é igual a uma pequena esperança",
        "Quando você chegar ao fim de sua corda, dê um nó e segure-se" 
      ]
    }
  ]

  return (
    <div className="container">
      <img className="logo" src={logoImg} alt="logo image" />

      <h2 className="title">Gerador</h2>

      <section className='buttons-categoria'>
        {
          categorias.map((item, index)=>(

            <button className='btn_categoria'>{item.categoria}</button>

          ))
        }
      </section>

      <button className="btn_gerar">Gerar</button>

      { frase && (<p className="frase-gerada">{`"${frase}"`}</p>) }

    </div>
  )
}

export default App
