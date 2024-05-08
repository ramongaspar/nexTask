//Renderiza em formato de calendário, um grid contendo todos seus dias
import { Mes } from '../../../dataCaledario'
import DiasEl from './DiasEl'

function MesEl({mes}:{mes:Mes}) {
  const {nome, dias} = mes 

  //Array com objetos Dia / Gerando componentes Dias
  const d = dias.map((dia:{nome:string}, index:number) =>{
      return(
        <DiasEl key={index.toString()+nome} mes={nome} dia={dia} idx={index}></DiasEl>
    )
  })
  return (
    <div id='calendario-dias' className='p-1'>
      {d}
    </div>
  )
  
}


export default MesEl