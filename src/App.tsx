import './App.css'
import { useState } from 'react'
import {  RouterProvider } from 'react-router-dom'
import { router } from './Router'
import { PointsProvider } from './Context/PointsContext'
import { history, myPoints, tabelaRecompensas, tabelaTarefas } from './data'
import { TabelasProvider } from './Context/TabelasContext'

const setHistory = (r:string,u:number,d:Date)=>{
  const data = `${r}, ${u} ${d.getDate()}/${d.getMonth() + 1}`
  history.push(data)
  localStorage.setItem('historico', JSON.stringify(history))
}

const setTabelaRecompensa = () =>{
    localStorage.setItem('tabelaDeRecompensas', JSON.stringify(tabelaRecompensas))
}
const setTabelaTarefa = () =>{
    localStorage.setItem('tabelaDeTarefas', JSON.stringify(tabelaTarefas))
}

function App() {
  
  const [totalPontos,setPontos] = useState(myPoints)
  const addPontos = (p:number)=>{
    setPontos(prevPontos => prevPontos + p)
    localStorage.setItem('pontos',JSON.stringify(totalPontos))
  }  
  
  const subPontos = (p:number, r:string)=>{
    setPontos(prevPontos => prevPontos - p)
    localStorage.setItem('pontos',JSON.stringify(totalPontos))
    const u = tabelaRecompensas.changeUso(r)
    const d = new Date()
    
    setHistory(r, u!, d)
  }  


  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div id='main' className='main'>
       
        <div className='w-full h-full'>
          <PointsProvider value={{totalPontos: totalPontos, addPontos, subPontos}}>
            <TabelasProvider value={{tabelaRecompensas:tabelaRecompensas,tabelaTarefas:tabelaTarefas,setTabelaRecompensa,setTabelaTarefa}}>
              <RouterProvider router={router}></RouterProvider>
            </TabelasProvider>
          </PointsProvider>
        </div>

      </div>
    </div>
  )
}

export default App
