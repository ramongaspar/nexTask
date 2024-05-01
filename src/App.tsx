import { useState } from 'react'
import './App.css'
import Menu from './Components/Menu'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import Rewards from './Components/Recompensas/Rewards'
import Progresso from './Components/Tarefas/Progresso'
import HistoricoRecompensa from './Components/Recompensas/HistoricoRecompensa'
import { history, myPoints, tabelaRecompensa } from './data'
import { PointsProvider } from './Context/PointsContext'
import Calendario from './Components/Calendario/Calendario'

const setHistory = (r:string,u:number,t:Date)=>{
  const data = `${r}, ${u} ${t.getDate()}/${t.getMonth() + 1}`
  history.push(data)
  localStorage.setItem('historico', JSON.stringify(history))
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
    const u = tabelaRecompensa.changeUso(r)
    const t = new Date()
    localStorage.setItem('tabelaDeRecompensa', JSON.stringify(tabelaRecompensa))
    setHistory(r, u!, t)
  }  


  const router = createBrowserRouter([
    {
      path:'/',
      element:<Menu></Menu>,
    },
    {
      path:'/progresso',
      element:<Progresso></Progresso>
    },
    {
      path:'/recompensas',
      element:<Rewards></Rewards>
    },
    {
      path:'/historico',
      element:<HistoricoRecompensa></HistoricoRecompensa>
    },
    {
      path:'/calendario',
      element:<Calendario></Calendario>
    },
  ])




  return (
    
    <div className='w-screen h-screen flex justify-center items-center'>
      <div id='main' className='main'>
       
        <div className='w-full h-full'>
          <PointsProvider value={{totalPontos: totalPontos, addPontos, subPontos}}>
            <RouterProvider router={router}></RouterProvider>
          </PointsProvider>
        </div>

      </div>
    </div>
  )
}

export default App
