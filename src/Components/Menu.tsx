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
      <Link className=" main-day " to={`/tarefas/${month.nome}/${idx.toString()}`} state={{dia:dia, index:idx,mes:month.nome}}>
        <div className="flex  flex-col items-center justify-center my-2 ">
          <h2 className="text-xl m-0 tracking-tighter">Hoje </h2>
          <h1 className="text-3xl tracking-wider -mt-2">{dia.nome}</h1>
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
    <div  className="flex flex-col h-full justify-between ">
      <section id='properties-section' className="w-full  mx-auto px-4 text-xl flex justify-between items-center border-b shadow ">
        <h2 className="text-2xl my-2 ">{date}</h2>
       <Link className=" border-none flex justify-center items-center " to={'/profile'}> <img className="py-1 w-8"  alt="profilepic" src='/src/assets/images/profile.png'></img> </Link>
      </section>
      <section id="current-day-section" className="h-5/6 shadow w-full p-4" >
        {dayTemplate}
      </section>
      <section id="selection-section" className=' py-2 shadow w-full text-2xl h-2/6 flex flex-col justify-center items-center gap-6  '>
        <h2 className="button-alike w-11/12 h-2/6 flex items-center justify-center" ><Link to={'/tarefas'}> Tarefas </Link></h2>
        <h2 className="button-alike w-11/12 h-2/6 flex items-center justify-center" ><Link to={'/recompensas'}> Recompensas  </Link></h2>
      </section>
    </div>
  )
}

export default Menu