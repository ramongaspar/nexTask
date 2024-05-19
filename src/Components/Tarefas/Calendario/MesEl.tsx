//Renderiza em formato de calendário, um grid contendo todos seus dias
import { Dia, Mes } from '../../../dataCaledario'
import DiasEl from './DiasEl'

function MesEl({mes, idx}:{mes:Mes, idx:number}) {
  
  const {nome, dias} = mes 

  //Array com objetos Dia / Gerando componentes Dias
  const d = dias.map((dia:Dia, index:number) =>{
      return(
        <DiasEl mesidx = {idx} key={index.toString()+nome} mes={nome} dia={dia} idx={index}></DiasEl>
    )
  })
  return (
    <div style={{backgroundColor:''}} id='calendario-dias' className='p-1'>
      {d}
    </div>
  )
  
}


export default MesEl