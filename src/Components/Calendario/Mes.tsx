
import Dia from './Dia'

function Mes( {meses} : {meses:{mes:string,dias:{}[]}} ) {

  const {mes,dias} = meses 

  const d = dias.map((dia:{}) =>{
      return(
        <Dia dia={dia}></Dia>
    )
  })
  return (
    <div id='calendario-dias' className='p-1'>
      {d}
    </div>
  )
}

export default Mes