//Formulário para adicionar novas Tarefas/Recompensas

import { useContext, useState } from 'react'
import { Elemento } from '../../data'
import { TabelasContext } from '../../Context/TabelasContext'



function AddNewElemento() {
    const [elemento, setElemento] = useState({nome:'',pontos:'',usos:0,descricao:''})
    const keys = Object.keys(elemento)
    
    const { tabelaTarefas, setTabelaTarefa } = useContext(TabelasContext)
     
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
        tabelaTarefas.addEl(el)
        setTabelaTarefa(tabelaTarefas)
    }
 
    return (
        <div className='p-4 text-2xl flex flex-col items-center w-full top-5 left-0' style={{position:'absolute',backgroundColor:'#F5F7DC'}}>
            <form className='flex flex-col items-center gap-4'  onSubmit={handleSubmit}>
                <p className='w-5/6 flex justify-start pl-2'>Entre com os dados da tarefa</p>
                <div className='p-8 flex flex-col gap-4'>
                    { keys.map((k,index)=>{     
                        if(k === 'usos') return 
                        return(
                            <div key={index} className='flex w-full items-center justify-center gap-1'>
                                <label className=' text-left w-2/5' htmlFor={k}>{k}</label>
                                <input className='w-3/5' name={k} onChange={handleChange}></input>
                            </div>
                        )
                    })}
                </div>
                <button className='button-alike h-10 flex items-center'>salvar</button>
            </form>
        </div>
  )
}

export default AddNewElemento