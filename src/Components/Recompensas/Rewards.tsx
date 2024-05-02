import { useContext, useEffect, useState } from 'react'
import Reward from './Reward.js'
import { PointsContext } from '../../Context/PointsContext.js'
import { Link } from 'react-router-dom'
import { TabelasContext } from '../../Context/TabelasContext.js'

function Rewards() {
  //EDITAR TABELA CMO PESQUISA HASH PARA ADD CONTADOR EM RECOMPENSAS
  const {tabelaRecompensas} = useContext(TabelasContext)
  const {totalPontos} = useContext(PointsContext)
  console.log(tabelaRecompensas)
  const myRewards: any[] = tabelaRecompensas.listItems()
  useEffect(()=>{}, myRewards)
  //DOM
  const rewardListEl = myRewards.map((r)=>{
    return(
      <Reward nome={r.nome} descricao={r.descricao} pontos={r.pontos}></Reward>
    )
  })

  
  return (
      <div className='w-full h-full flex flex-col items-center gap-2 p-2 recompensas'>
        <div className='flex w-4/5 mb-4'>
          <img className='w-2/4' src='../src/assets/images/recompensa.jpg'></img>
          <div className='flex flex-col w-1/2'>
            <div className='h-1/2'></div>
            <h2 className='h-1/2 w-full pb-4 flex items-end justify-center text-4xl'>{totalPontos}</h2>
          </div>
        </div>
        {rewardListEl}
        <Link className=' self-start ' to={'/'}>Aq</Link>
      </div>
      
  )
}

export default Rewards