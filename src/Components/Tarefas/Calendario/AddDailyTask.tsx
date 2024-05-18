//component com div responsável por adicionar tarefa

import React, {  useContext, useEffect, useState } from 'react'
import { Tarefa } from '../../../dataCaledario'
import { TabelasContext } from '../../../Context/TabelasContext'
import {Dia} from '../../../dataCaledario'
import { CalendarioContext } from '../../../Context/CalendarioContext'

function AddDailyTask(
    {d,display,dia, mes, index, aux}:
    {d:React.Dispatch<React.SetStateAction<boolean>>, display:boolean, dia:Dia, mes:string, index:number, aux:(dia:Dia)=>void}
){

  const [isShown,setIsShown] = useState(true)
  const [task, setT] = useState ({nome:'',pontos:'',descricao:''})

  const {editCalendario} = useContext(CalendarioContext)
  const {tabelaTarefas} = useContext(TabelasContext)

  const tarefas = tabelaTarefas.listItems()
  
  const handleChange = (e:any)=>{
    const {value, name} = e.target
    setT(prev=>{
      return{
        ...prev,
        [name]:value
      }
    })
  }


  const handleSubmit = (e:any)=>{
    e.preventDefault()
    const t = new Tarefa(task.nome, task.pontos, task.descricao)
    d(!display)
    dia.addTarefa(t)
    editCalendario(dia, mes, index)
    aux(dia)
  }
  const handleTarefaAdd = (t:{nome:string,pontos:string,descricao:string})=>{
    const tarefa = new Tarefa(t.nome, t.pontos, t.descricao)
    d(!display)
    dia.addTarefa(tarefa)
    editCalendario(dia, mes, index)
    aux(dia)
  }
  
  return (
    <section id='add-daily-task'  className='flex flex-col items-center justify-evenly w-full  h-80 mx-auto shadow-2xl border z-10'>
      {isShown 
        ?
          <div className='h-full w-full tasks-grid p-1'>
            {tarefas.map((t, index) => {
              return(
                  <h3 key={index} onClick={()=>handleTarefaAdd(t)} className='flex items-center hover:cursor-pointer   justify-center border rounded-md text-lg text-center bg-red-700'>
                    {t.nome}
                  </h3>
              )
            })}
          </div>
        :
          <form className='h-full w-full flex flex-col items-center justify-center'>
            {Object.keys(task).map((k, index)=>{
            return(
              <div key={index} className='w-3/4 p-2 flex justify-center items-center'>
                <label className=' w-1/4' htmlFor={k}>{k}</label>
                <input className='w-3/4' onChange={handleChange} name={k}></input>
              </div>
            )
            })}
            <button className='border p-1 rounded' onClick={handleSubmit}>add</button>
          </form>
      }
      <button className='w-4/12 p-1 border bottom-2 right-2' style={{position:'absolute'}} onClick={()=>setIsShown(!isShown)}>{isShown ? 'nova tarefa' : 'tarefas existentes'}</button>
    </section>
  )
}

export default AddDailyTask