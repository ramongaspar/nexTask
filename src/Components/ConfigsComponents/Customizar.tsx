import { useState } from 'react'
import ListaTarefas from './ListaTarefas'
import ListaRecompensas from './ListaRecompensas'

function Customizar() {
  const [page,setPage] = useState(true)
  return (
    <section id='menu-customizar ' className='h-full w-full flex flex-col'>
      <nav className='nav-customizar p-2 gap-4'>
        <h2 onClick={()=>{setPage(true)}} className='button-alike h-full w-6/12 flex items-center justify-center'>Tarefas</h2>
        <h2 onClick={()=>{setPage(false)}} className='button-alike h-full w-6/12 flex items-center justify-center'>Recompensas</h2>
      </nav>
      {page ? <ListaTarefas/>:<ListaRecompensas/>}
    </section>
  )
}

export default Customizar