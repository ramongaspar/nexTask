//Componente listando os dias presentes no Mês, gerando um Link para cad Dia

import { Link } from "react-router-dom"

function DiasEl({dia,mes, idx, mesidx}:{dia:{nome:string,},mes:string,idx:number, mesidx:number}) {
  const currDate = new Date()
  const auxDate = `${idx + 1}/${mesidx}/2024`
  const partData = auxDate.split('/')
  const thisDate = new Date(parseInt(partData[2]), parseInt(partData[1]),parseInt(partData[0])+1)
  const yesterdayOrTomorrow = (thisDate > currDate)
  const bg = yesterdayOrTomorrow ? 'white' : 'black'
  return (
    <Link  style={{backgroundColor:bg}} className="border" to={`/tarefas/${mes}/${idx.toString()}`} state={{dia:dia, index:idx,mes:mes}}>
      <div  className=" border">
        <h2 className=" flex justify-evenly w-11/12 "><span >{dia.nome.slice(0,3)}</span> {idx+1 < 10 ? '0'+(idx+1).toString() : (idx+1).toString()} </h2>

      </div>
    </Link>
  )
}

export default DiasEl