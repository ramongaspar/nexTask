//Menu // Main Page

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Menu() {

  //Estado para exibir o dia corrente; state para atualizar
  const [date, setDate] = useState('')
  useEffect(()=>{
    const d = new Date()
    const dateTime = `${d.getDate()}/${d.getMonth()+1}`
    setDate(dateTime) 
  })  
  return (
    <div  className="flex flex-col h-full justify-between">
      <div style={{backgroundImage:`url(../src/assets/images/arvoreCerebral.jpg)`, backgroundSize:'cover'}} className='shadow h-5/6 flex gap-4 items-center justify-center pb-8'>
        <div className="flex h-1/2 w-full justify-between px-8 pl-16 text-2xl items-end">
            <h2 ><Link to={'/tarefas'}> Calendário </Link></h2>
            <h2 ><Link to={'/recompensas'}> Recompensas  </Link></h2>
        </div>
      </div>
      <div className="w-full flex justify-between p-4">
        <h2>{date}</h2>
        <h2><Link to={'/customizar'}> Editar </Link></h2>
      </div>
    </div>
  )
}

export default Menu