import React, { useContext, useState } from 'react'
import { Elemento } from '../../data'
import { TabelasContext } from '../../Context/TabelasContext'


function TarefasCrud() {
    const [elemento, setElemento] = useState({nome:'',pontos:'',usos:0,descricao:''})
    const [tOR, setTOR] = useState(false)
    const keys = Object.keys(elemento)
    
    const { tabelaRecompensas, tabelaTarefas, setTabelaRecompensa, setTabelaTarefa } = useContext(TabelasContext)
     
    const handleChange = (e:any)=>{
        const {value, name} = e.target
        console.log(value, name)
        setElemento((prev)=>{
            return(
                {
                    ...prev,
                    [name]:value
                }
            )
        })
    }
    const handleSubmit = ()=>{
        const {nome, pontos, usos, descricao} = elemento
        const el = new Elemento(nome, pontos, usos, descricao)
        if(!tOR){
            tabelaTarefas.addEl(el)
            setTabelaTarefa()
        }else{
            tabelaRecompensas.addEl(el)
            setTabelaRecompensa()
        }
    }
 
    return (
        <div className='h-4/5 w-full flex flex-col items-center justify-evenly '>
            <div className='w-full flex justify-evenly items-center text-3xl'>
                <h2 style={!tOR ? {backgroundColor:'', boxShadow:'0px 0px 8px 8px white'}:{}} className='border rounded-lg py-2 px-1' onClick={()=>setTOR(false)} >Task</h2>
                <h2 style={tOR ? {backgroundColor:'', boxShadow:'0px 0px 8px 8px white'}:{}} className='border rounded-lg py-2 px-1' onClick={()=>setTOR(true)} >Reward</h2>
            </div>
            <form className=' w-3/4  flex flex-col justify-center items-center gap-4 '  onSubmit={handleSubmit}>
                { keys.map((k,index)=>{     
                    if(k === 'usos') return 
                    return(
                        <div key={index} className='flex w-full  items-center justify-center gap-1'>
                            <label className=' text-center w-2/5' htmlFor={k}>{k}</label>
                            <input className='w-3/5' name={k} onChange={handleChange}></input>
                        </div>
                    )
                })}
                <button className='mt-8 border rounded-lg py-1 px-4'>ADD</button>
            </form>
        </div>
  )
}

export default TarefasCrud