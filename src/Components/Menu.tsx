//Menu // Main Page

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Menu() {

  //Estado para exibir o dia corrente; state para atualizar
  const [date, setDate] = useState('')
  useEffect(()=>{
    const d = new Date()
    const m = d.getMonth()+1
    const day = d.getDate()
    const dateTime = `${day < 10? '0' + day.toString(): day}/${m < 10 ? '0'+m.toString():m}`
    setDate(dateTime) 
  })  
  //style={{backgroundImage:`url(../src/assets/images/arvoreCerebral.jpg)`, backgroundSize:'cover'}}
  return (
    <div  className="flex flex-col h-full justify-between">
      <section id='properties-section' className="w-11/12 mx-auto pt-4 text-xl flex justify-between items-center border-b ">
        <h2 className="">{date}</h2>
        
        <h2 className="button-alike "><Link to={'/customizar'}> Editar </Link></h2>
      </section>

      <section id="current-day-section" className="h-3/6 shadow" >

      </section>

      <section id="selection-section" className=' py-2  shadow w-full text-2xl h-2/6 flex flex-col items-center gap-6  '>
        <h2 className="button-alike" ><Link to={'/tarefas'}> Calendário </Link></h2>
        <h2 className="button-alike" ><Link to={'/recompensas'}> Recompensas  </Link></h2>
        <h2 className="button-alike" ><Link to={'/historico'}> Historico  </Link></h2>
      </section>
      
    </div>
  )
}

export default Menu