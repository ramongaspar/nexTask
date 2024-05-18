//Menu // Main Page

import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { CalendarioContext } from "../Context/CalendarioContext"

function Menu() {
  const {calendario} = useContext(CalendarioContext)
  
  //Estado para exibir o dia corrente; state para atualizar
  const [date, setDate] = useState('')
  useEffect(()=>{
    const d = new Date()
    const m = d.getMonth()+1
    const day = d.getDate()
    const dateTime = `${day < 10? '0' + day.toString(): day}/${m < 10 ? '0'+m.toString():m}`
    setDate(dateTime) 
  })

  //template para mostrar dia atual na home
  let dayTemplate  
  if (date){
    const dateRef = new Date()
    const month = calendario.meses[dateRef.getMonth()]
    const idx = dateRef.getDate() - 1
    const dia = month.dias[idx]
    dayTemplate = (
      <Link className="w-full h-full flex flex-col hover:cursor-pointer" to={`/tarefas/${month.nome}/${idx.toString()}`} state={{dia:dia, index:idx,mes:month.nome}}>
        <div className="flex  flex-col items-center justify-center my-4 ">
          <h2 className="text-xl">Hoje </h2>
          <h1 className="text-3xl">{dia.nome}</h1>
        </div>
        <div className="flex flex-col justify-center mx-auto w-3/4 text-lg">
          {dia.tarefas.map((t, index)=>{
            if(t){
            return(
            <li key={index}>
              {t.nome}
            </li>
          )}})}
        </div>
      </Link>
    )
  }


  //style={{backgroundImage:`url(../src/assets/images/arvoreCerebral.jpg)`, backgroundSize:'cover'}}
  return (
    <div  className="flex flex-col h-full justify-between">
      <section id='properties-section' className="w-full mx-auto p-4 pb-0 text-xl flex justify-between items-center border-b ">
        <h2 className="">{date}</h2>
        <h2 className="button-alike border-none "><Link to={'/customizar'}> <img className="w-6" src="src/assets/images/settings.png"></img> </Link></h2>
      </section>
      <section id="current-day-section" className="h-4/6 shadow w-full" >
        {dayTemplate}
      </section>
      <section id="selection-section" className=' py-2 shadow w-full text-2xl h-2/6 flex flex-col justify-center items-center gap-6  '>
        <h2 className="button-alike" ><Link to={'/tarefas'}> Calendário </Link></h2>
        <h2 className="button-alike" ><Link to={'/recompensas'}> Recompensas  </Link></h2>
        <h2 className="button-alike" ><Link to={'/historico'}> Historico  </Link></h2>
      </section>
    </div>
  )
}

export default Menu