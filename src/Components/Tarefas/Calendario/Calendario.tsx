//Componente principal na exibição do calendário.

import { useContext, useState } from 'react'
import MesEl from './MesEl'
import { CalendarioContext } from '../../../Context/CalendarioContext'
import { Link } from 'react-router-dom'
import Back from '../../BackButtom'
import BackButtom from '../../BackButtom'


function Calendario() {
    const {calendario} = useContext(CalendarioContext)
    const [cal, setCal] = useState(calendario)
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
    const calendarioEl = cal.meses.map((mes,index)=>{
        if(seletor === index){
            return(    
                <div key={index} id='calendario' className='flex flex-col items-center justify-center w-full h-full gap-4 px-1 mt-1'>
                    <h2 className='calendario-mes-titulo'>
                        <span className='text-xl pt-2 hover:cursor-pointer' onClick={handleBackButton}>{'<'}</span>
                            {mes.nome}
                        <span className='text-xl pt-2 hover:cursor-pointer' onClick={handleForwardButton}>{'>'}</span>
                    </h2>
                    <div  className='flex w-full h-5/6 mt-2'>
                        <MesEl idx={index} mes={mes}></MesEl>
                    </div>
                </div>
            )
        }
    })
    return (
        <div className='w-full h-full flex flex-col items-center' style={{position:'relative'}}>
            <BackButtom></BackButtom>
            <div className='w-full h-full'>
                {calendarioEl}
            </div>
            <h2 style={{position:'absolute'}} className=" bottom-12 text-2xl button-alike h-20 w-11/12 rounded-lg flex items-center justify-center" ><Link to={'/progresso'}> Progresso </Link></h2>
        </div>
    )  
}

export default Calendario