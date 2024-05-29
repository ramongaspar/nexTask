//Lista e permite o resgate de recompensas

import { useContext } from 'react'
import Reward from './Reward.js'
import { PointsContext } from '../../Context/PointsContext.js'
import { Link } from 'react-router-dom'
import { TabelasContext } from '../../Context/TabelasContext.js'

function Rewards() {

  //Contexts
  const {tabelaRecompensas} = useContext(TabelasContext)
  const {totalPontos} = useContext(PointsContext)

  //Keys for mapping
  const myRewards: any[] = tabelaRecompensas.listItems()
 

  //DOM
  const rewardListEl = myRewards.map((r)=>{
    return(
      <Reward nome={r.nome} descricao={r.descricao} pontos={r.pontos}></Reward>
    )
  })

  
  return (
      <div className='w-full h-full flex flex-col items-center gap-2 p-2 recompensas' style={{position:'relative'}}>

        <Link to={'/'} className=' top-5 left-5' style={{position:'absolute'}}>back</Link>
        
        <div className='flex w-4/5 mb-4'>
          <div className='flex flex-col w-1/2'>
            <div className='h-1/2'></div>
            <h2 className='h-1/2 w-full pb-4 flex items-end justify-center text-4xl'>{totalPontos}</h2>
          </div>
          <h2 className="button-alike w-11/12 rounded-lg text-center" ><Link to={'/historico'}> Historico  </Link></h2>
        </div>
        {rewardListEl}
        
      </div>
      
  )
}

export default Rewards