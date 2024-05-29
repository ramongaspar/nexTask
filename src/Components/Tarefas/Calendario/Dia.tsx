//Componente com conteúdo do Dia específico.

import { useContext, useEffect, useState } from 'react'
import {  Link, useLocation } from 'react-router-dom'
import { Dia as DiaClas, Tarefa } from '../../../dataCaledario'
import AddDailyTask from './AddDailyTask'
import { CalendarioContext } from '../../../Context/CalendarioContext'
import { PointsContext } from '../../../Context/PointsContext'
import BackButtom from '../../BackButtom'
import EarnedPoints from '../../EarnedPoints'
import TarefaDia from './TarefaDia'

function Dia() {
  
  const {editCalendario} = useContext(CalendarioContext)
  const {addPontos, totalPontos} = useContext(PointsContext)
  const {state} = useLocation() 
  const {mes, index} = state

  const [isShown, setIsShown] = useState(false)
  const d = new DiaClas('')
  const [dia, setDia] = useState(d)
  const [pontos, setPontos] = useState(0)

  //destruturando state
  let nome:string, tarefas:Tarefa[]
  if(dia){
    ({nome, tarefas} = dia)
    //totalPoints = dia.getTotalDayPoints()
  }
  //atualizando estado dia com o objeto no state do Router
  useEffect(()=>{
    if(state){
      const dia:DiaClas = state.dia
      for(let i = 0; i<9; i++){
        console.log(dia.tarefas[i])  
        if(dia.tarefas[i]){
          let t = dia.tarefas[i] 
          if(t){
            const newT = new Tarefa(t.nome, t.pontos,t.descricao,t.completa)
            dia.tarefas[i] = newT
          }
        }
      }
      const newDia = new DiaClas(dia.nome,dia.tarefas,dia.comentario)
      setDia(newDia)
    }
    dia.setStatus()    
    setPontos(totalPontos)
  },[state])
  

  //mudança na tarefa, mudança no dia, no mês, no ano, no calendário. 
  const handleTarefaChange = (t:Tarefa)=>{
    
    if(t.completa){
      return
    }
    dia.setStatus()
    t.setCompleta()
    
    const newDia = new DiaClas(dia.nome,tarefas,dia.comentario,dia.status)
    editCalendario(newDia, mes, index)
    setDia(newDia)

    addPontos(parseInt(t.pontos))
    return <EarnedPoints points={t.pontos}></EarnedPoints>
  }

  const handleTaskAdd = (newDia:DiaClas)=>{
    setDia(newDia)
  }
  
  //exibição de tarefas
  const tList = tarefas! && tarefas.map((t:Tarefa,index) =>{
    if (t){
      return(
        <TarefaDia index={index} currTarefa={t} handleTarefaChange={handleTarefaChange}></TarefaDia>
      )
    }
  }) || null


  return (
    <div className='w-full  h-full flex flex-col justify-between px-4 py-2' style={{position:'relative'}}>
      <BackButtom></BackButtom>
      <div className=' self-center w-3/4 flex items-center justify-center '>
        <h1 className='text-3xl text-center mb-1'> {nome!} {state.index+1} </h1>
        <h2 className='tarefa-pontos-totais'> {pontos}</h2>
      </div>

      <ul className='flex flex-col h-full mt-8 p-1 shadow'>
        {tList}
      </ul>
      
      <div style={isShown?{display:'flex', position:'absolute'}:{display:'none'}} className=' w-11/12 bottom-28'>
        <AddDailyTask d={setIsShown} display={isShown} dia={dia} mes={mes} index={index} aux={handleTaskAdd}></AddDailyTask>
      </div> 

      <div className='flex w-full items-center justify-end mt-4 '>
        <h2 onClick={()=>{setIsShown(prev=>!prev)}} className='button-alike  py-1  text-center'>nova tarefa</h2>
      </div>

    </div>
  )
}

export default Dia