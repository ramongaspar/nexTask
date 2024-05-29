
import { Tarefa } from '../../../dataCaledario'

function TarefaDia({index,currTarefa,handleTarefaChange}:{index:number, currTarefa:Tarefa, handleTarefaChange:any}) {

  return (
    <div key={index} className='tarefa'>
      <div className='flex justify-between'>
        <div className='flex-col w-3/4 gap-2 '>
          <h2 className='text-2xl'>{currTarefa.nome} - </h2>
          <p className='pl-2'>{currTarefa.descricao}</p>
        </div>
        <div className='flex text-center flex-col'>
          <h3>Pontos:{currTarefa.pontos}</h3>
          <div style={{position:'relative'}} onClick={()=>handleTarefaChange(currTarefa)} className='w-28 h-8 draggable-div place-self-end'>
            <h2 style={{position:'absolute'}} className='draggable'></h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TarefaDia