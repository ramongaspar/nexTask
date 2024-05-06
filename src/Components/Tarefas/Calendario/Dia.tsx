//Componente com conteúdo do Dia específico.

import { useEffect, useState } from 'react'
import {  useLocation } from 'react-router-dom'
import { Tarefa } from '../../../dataCaledario'

function Dia() {
    const {state} = useLocation() 
    const [dia, setDia] = useState()
    let nome, status, comentario, tarefas
    if(dia){
      ({nome, status, comentario, tarefas} = dia)
    }
    useEffect(()=>{
      if(state){
        setDia(state.dia)
        console.log(dia)
      }
    },[state])
    const tList = tarefas && tarefas.map((t:Tarefa) =>{
        return(
          
            <li>{t.nome}</li>
          
        )
      } 
    ) || null

    return (
      <div className='w-full  h-full'>
        <h1> {nome} {state.index+1} </h1>
        <ul>
          {tList}
        </ul>

      </div>
    )
}

export default Dia