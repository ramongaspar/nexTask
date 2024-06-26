//Inicio do fluxo de programa. Contém contextos e rotas a serem chamadas para uso dentro do app.

import './App.css'
import { useState } from 'react'
import {  RouterProvider, } from 'react-router-dom'
import { router } from './Router'
import { PointsProvider } from './Context/PointsContext'
import { Tabela, history, myPoints, tabelaRecompensas, tabelaTarefas } from './data'
import { TabelasProvider } from './Context/TabelasContext'
import anoPresente, { Dia } from './dataCaledario'
import { CalendarioProvider } from './Context/CalendarioContext'


//                                              FUNÇÕES AUXILIARES

//Adicionar objeto ao Histórico
const setHistory = (r:string,u:number,d:Date)=>{
  const data = `${r}, ${u} ${d.getDate()}/${d.getMonth() + 1}`
  history.push(data)
  localStorage.setItem('historico', JSON.stringify(history))
}
//          Upload de dados p/Tabelas em Local storage
const setTabelaRecompensa = (tabela:Tabela) =>{
    localStorage.setItem('tabelaDeRecompensas', JSON.stringify(tabela))
}
const setTabelaTarefa = (tabela:Tabela) =>{
    localStorage.setItem('tabelaDeTarefas', JSON.stringify(tabela))
}

function App() {
  
  //Atribuindo pontos recebidos do banco a um estado e Criando elementos do contexto de Pontos
  const [totalPontos,setPontos] = useState(myPoints)
  const [calendario, setCal] = useState(anoPresente)

  const addPontos = (p:number)=>{
    const currPontos = totalPontos
    const total = currPontos + p
    localStorage.setItem('pontos',JSON.stringify(total))
    setPontos(total)
  }  
  const subPontos = (p:number, r:string)=>{
    setPontos(prevPontos => prevPontos - p)
    localStorage.setItem('pontos',JSON.stringify(totalPontos))
    const u = tabelaRecompensas.changeUso(r)
    const d = new Date()
    setHistory(r, u!, d)
  }  
  const editCalendario = (dia:Dia, mes:string, indexDia:number)=>{
    console.log(dia, mes, indexDia)
    const meses = anoPresente.meses
    for(let i=0; i<12;i++){
      if (meses[i].nome === mes){
        for(let y=0;y<meses[i].dias.length;y++){
          if (y === indexDia){
            meses[i].dias[y] = dia
          }
        }
      }
    }
    anoPresente.meses = meses
    localStorage.setItem('calendario',JSON.stringify(anoPresente))
    setCal(anoPresente)
  }
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div id='main' className='main'>
       
        <div className='w-full h-full'>
          <CalendarioProvider value={{calendario, editCalendario}}>
          <PointsProvider value={{ totalPontos, addPontos, subPontos}}>
          <TabelasProvider value={{tabelaRecompensas:tabelaRecompensas,tabelaTarefas:tabelaTarefas,setTabelaRecompensa,setTabelaTarefa}}>
            <RouterProvider router={router}></RouterProvider>
          </TabelasProvider>
          </PointsProvider>
          </CalendarioProvider>
       
        </div>
      </div>
    </div>
  )
}

export default App
