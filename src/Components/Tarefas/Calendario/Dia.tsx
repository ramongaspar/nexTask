//Componente com conteúdo do Dia específico.

import { useContext, useEffect, useState } from 'react'
import {  Link, useLocation } from 'react-router-dom'
import { Dia as DiaClas, Tarefa } from '../../../dataCaledario'
import AddDailyTask from './AddDailyTask'
import { CalendarioContext } from '../../../Context/CalendarioContext'
import { PointsContext } from '../../../Context/PointsContext'


function Dia() {
  const [isShown, setIsShown] = useState(false)
  const {editCalendario} = useContext(CalendarioContext)
  const {addPontos} = useContext(PointsContext)
  
  const {state} = useLocation() 
  const {mes, index} = state
  const d = new DiaClas('')
  const [dia, setDia] = useState(d)
  
  //destruturando state
  let nome:string, tarefas:Tarefa[], totalPoints
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
  },[state])
  

  //mudança na tarefa, mudança no dia, no mês, no ano, no calendário. 
  const handleTarefaChange = (t:Tarefa)=>{
    dia.setStatus()
    t.setCompleta()
    addPontos(parseInt(t.pontos))
    const newDia = new DiaClas(dia.nome,tarefas,dia.comentario,dia.status)
    editCalendario(newDia, mes, index)
    setDia(newDia)
  }

  const handleTaskAdd = (newDia:DiaClas)=>{
    setDia(newDia)
  }
  
  //exibição de tarefas
  const tList = tarefas! && tarefas.map((t:Tarefa,index) =>{
    if (t){
      return(

          <li key={index} className='tarefa' >
            <div className='flex justify-between'>
                <div className='flex-col w-3/4 gap-2 '>
                  <h2 className='text-2xl'>{t.nome} - </h2>
                  <p className='pl-2'>{t.descricao}</p>
                </div>
                <div className='flex flex-col'>
                  <h3>Pontos:{t.pontos}</h3>
                  <h3 onClick={()=>handleTarefaChange(t)} className='w-8 h-8 bg-slate-100 place-self-end'>{t.completa && <img src='/checkmark.png'></img>}</h3>
                </div>
            </div>
          </li>
         
      
      )
    }
  }) || null


  return (
    <div className='w-full  h-full flex flex-col justify-between px-4 py-2' style={{position:'relative'}}>
      <Link to={'/'} className=' top-5 left-5' style={{position:'absolute'}}>back</Link>
      <div className=' self-center w-3/4 flex items-center justify-center border-b'>
        <h1 className='text-3xl text-center mb-1'> {nome!} {state.index+1} </h1>
      </div>

      <ul className='flex flex-col h-full mt-8 px-1 shadow'>
        {tList}
      </ul>
      
      <div style={isShown?{display:'flex', position:'absolute'}:{display:'none'}} className=' w-11/12 bottom-28'>
        <AddDailyTask d={setIsShown} display={isShown} dia={dia} mes={mes} index={index} aux={handleTaskAdd}></AddDailyTask>
      </div> 

      <div className='flex w-full items-center justify-between mt-4 '>
        <h2></h2>
        <h2 onClick={()=>{setIsShown(prev=>!prev)}} className='button-alike px-1 py-0 w-1/6 text-center'>add task</h2>
      </div>

    </div>
  )
}

export default Dia