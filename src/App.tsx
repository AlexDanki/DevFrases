import { useState, useEffect } from 'react'

import logoImg from './assets/logo.png'
import './App.css'

function App() {

  const [categoriaAtiva, setCategoriaAtiva] = useState(0)
  const [frase, setFrase] = useState("");
  const [prevFrase, setPrevFrase] = useState("");

  let comecou = false;

useEffect(()=>{
  if(!comecou){
    setPrevFrase(frase)
    comecou = true
  }
},[])

  const categorias = [
    {
      id: 0,
      categoria: "Bom dia",
      frases: [
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
    },
  ]

  function handleSwapCategory(index: number){
    console.log(index)
    setCategoriaAtiva(index)
  }

  function handleGenerateFrase(){
    const randomIndex = Math.floor(Math.random() * categorias[categoriaAtiva].frases?.length)

    console.log(categorias[categoriaAtiva].frases[randomIndex])
    console.log(prevFrase)
    if(categorias[categoriaAtiva].frases[randomIndex] == prevFrase){
      let newRandomIndex = randomIndex - 1
      if(newRandomIndex < 0)
        newRandomIndex = 1
      setFrase(categorias[categoriaAtiva].frases[newRandomIndex])
      setPrevFrase(categorias[categoriaAtiva].frases[newRandomIndex])
      console.log("Repetiu-se")
      return
    }

    setFrase(categorias[categoriaAtiva].frases[randomIndex])
    setPrevFrase(categorias[categoriaAtiva].frases[randomIndex])
    console.log("Não repetiu")

  }

  return (
    <div className="container">
      <img className="logo" src={logoImg} alt="logo image" />

      <h2 className="title">Gerador</h2>

      <section className='buttons-categoria'>
        {
          categorias.map((item, index)=>(

            <button 
            style={{backgroundColor: categoriaAtiva == index ? "#4a1ef9" : "#fff", color: categoriaAtiva == index ? "#fff" : "#4a1ef9"}}
            key={index}
            onClick={()=> handleSwapCategory(item.id)}
            className='btn_categoria'>{item.categoria}</button>

          ))
        }
      </section>

      <button 
      onClick={()=> handleGenerateFrase()} 
      className="btn_gerar">Gerar</button>

      { frase && (<p className="frase-gerada">{`"${frase}"`}</p>) }

    </div>
  )
}

export default App
