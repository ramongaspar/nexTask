import  { useContext, useState } from 'react'

function Reward({nome, descricao, pontos}:{nome:string,descricao:string,pontos:string}){ 
    const {totalPontos, subPontos} = useContext(PointsContext)
    const [isDisplay, setIsDisplay] = useState(false) 
    const display = isDisplay ? 'flex' : 'none'   

    const handleGetReward =()=>{
        const p = parseInt(pontos) 
        if(totalPontos - p < 0) return console.log('Precisa de mais')
        subPontos(p, nome)
    }

    return (
        <div  className='py-2 w-9/12 bg-slate-300'>
            <div  className='flex flex-col text-left'>
                <div onClick={()=>{setIsDisplay(!isDisplay)}}>
                    <h2 className='pl-8 text-xl mb-1'>{nome}</h2>
                </div>
                <div style={{display:display}} className='p-2 ml-2 flex justify-evenly border-t w-11/12'>
                    <div >
                        <p>{descricao}</p>
                    </div>
                    <div className=' text-center ' >
                        <h3 onClick={handleGetReward} className=' border p-1 rounded-2xl'>{pontos} Pontos</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
import { PointsContext } from '../../Context/PointsContext'

export default Reward