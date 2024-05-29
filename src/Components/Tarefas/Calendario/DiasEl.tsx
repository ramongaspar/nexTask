//Componente listando os dias presentes no Mês, gerando um Link para cad Dia

import { Link } from "react-router-dom"
import { Dia } from "../../../dataCaledario"

function DiasEl({dia,mes, idx, mesidx}:{dia:Dia,mes:string,idx:number, mesidx:number}) {
  const currDate = new Date()
  const auxDate = `${idx + 1}/${mesidx}/2024`
  const partData = auxDate.split('/')
  const thisDate = new Date(parseInt(partData[2]), parseInt(partData[1]),parseInt(partData[0])+1)
 
  const today = (thisDate > currDate)
  let bg = today ? '#B5D99C' : '#FFF'
  
  if(!today){
    const status =  dia.status 
    if(status){
      switch(status){
        case 'concluido':
          bg = '#ffff82'
          break;
        case 'incompleto':
          bg = '#F5F7DC'
          break;
        case 'nada':
          bg ='#E65F5C'
          break;
        default:
          break;
      }
  }

  }
  return (
    <Link  style={{backgroundColor:bg}} className="border" to={`/tarefas/${mes}/${idx.toString()}`} state={{dia:dia, index:idx,mes:mes}}>
      <div  className=" ">
        <h2 className=" flex justify-evenly w-11/12 "><span >{dia.nome.slice(0,3)}</span> {idx+1 < 10 ? '0'+(idx+1).toString() : (idx+1).toString()} </h2>
      </div>
    </Link>
  )
}

export default DiasEl