//Componente com conteúdo do Dia específico.

import { useEffect, useState } from 'react'
import {  useLocation } from 'react-router-dom'
import { Dia as DiaClas, Tarefa } from '../../../dataCaledario'
import TarefaEl from '../TarefaEl'
import AddDailyTask from './AddDailyTask'


function Dia() {
    const [isShown, setIsShown] = useState(false)
    const {state} = useLocation() 
    const d = new DiaClas('')
    const [dia, setDia] = useState(d)
    let nome, status:string, comentario:string, tarefas
    if(dia){
      ({nome, status, comentario, tarefas} = dia)
    }
    useEffect(()=>{
      if(state){
        const dia:DiaClas = state.dia
        setDia(dia)
        console.log(dia)
      }
    },[state])
    const tList = tarefas && tarefas.map((t:Tarefa) =>{
        if (t){
          return(
              <li className='border grid grid-flow-row p-2 mb-2 mt-1' onClick={()=> <TarefaEl tarefa={t}></TarefaEl>}>
                <div className='flex justify-between'>
                  <div className='flex-col w-3/4 gap-2'>
                    <h2 className='text-2xl'>{t.nome} - </h2>
                    <p className='pl-2'>{t.descricao}</p>
                  </div>
                  <div className='flex flex-col'>
                    <h3>Pontos:{t.pontos}</h3>
                    <h3 onClick={()=>t.setCompleta()} className='w-8 h-8 bg-slate-100 place-self-end'>{t.completa && <img src='/checkmark.png'></img>}</h3>
                  </div>
                </div>
              </li>
          )
        }
      } 
    ) || null


    return (
      <div className='w-full  h-full flex flex-col justify-between px-4 py-2' style={{position:'relative'}}>
        <div className=' self-center'>
          <h1 className='text-3xl'> {nome} {state.index+1} </h1>
        </div>
        <ul className='flex flex-col h-full mt-8'>
          {tList}
        </ul>
      
        <div style={isShown?{display:'flex', position:'absolute'}:{display:'none'}} className=' bg-slate-400 w-11/12 bottom-28'>
          <AddDailyTask d={setIsShown} display={isShown} dia={dia}></AddDailyTask>
        </div> 
        <div className='w-full flex justify-end'>
          <h2 onClick={()=>{setIsShown(prev=>!prev)}} className='button-alike w-1/4 text-center'>add task</h2>
        </div>
      </div>
    )
}

export default Dia