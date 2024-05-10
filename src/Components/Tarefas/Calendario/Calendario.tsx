//Componente principal na exibição do calendário.

import { useContext, useState } from 'react'
import MesEl from './MesEl'
import { CalendarioContext } from '../../../Context/CalendarioContext'


function Calendario() {
    const {calendario} = useContext(CalendarioContext)
    
    //Interatividade / Exibição da seleção do mês
   
    const dateMonth = new Date().getMonth()
    const [seletor, setSeletor] = useState(dateMonth)
    const handleBackButton = ()=>{
        if(seletor === 0){
            setSeletor(11)
        }else
            setSeletor(prev=>prev-1)
    }
    const handleForwardButton = ()=>{
        if(seletor === 11){
            setSeletor(0)
        }else
            setSeletor(prev=>prev+1)
    }




   
    //Gerando elementos para cada mês / Array com 'Meses'
    const calendarioEl = calendario.meses.map((mes,index)=>{
        if(seletor === index){
            return(    
                <div key={index} id='calendario' className='flex flex-col items-center justify-center w-full h-full gap-4 px-1 mt-4'>
                    <h2 className='w-2/5 flex justify-between text-3xl border-b'>
                        <span className='text-xl pt-2 hover:cursor-pointer' onClick={handleBackButton}>{'<'}</span>
                            {mes.nome}
                        <span className='text-xl pt-2 hover:cursor-pointer' onClick={handleForwardButton}>{'>'}</span>
                    </h2>
                    <div className='flex w-full h-5/6'>
                        <MesEl mes={mes}></MesEl>
                    </div>
                </div>
            )
        }
    })
    return (
        <div className='w-full h-full flex items-center'>
            {calendarioEl}
        </div>
    )  
}

export default Calendario