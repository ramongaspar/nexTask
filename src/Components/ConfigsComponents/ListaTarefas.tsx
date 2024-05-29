import { useContext, useState } from 'react'
import { TabelasContext } from '../../Context/TabelasContext'
import AddNewElemento from './AddNewElemento'
import { Elemento } from '../../data'



function ListaTarefas() {
    const [addPage, setAddPage] = useState(false)

    const {tabelaTarefas,setTabelaTarefa} = useContext(TabelasContext)

    const handleDelete = (tarefa:Elemento)=>{
        tabelaTarefas.deleteItem(tarefa);
        setTabelaTarefa(tabelaTarefas)
    }

    const listaTarefas = tabelaTarefas.listItems().map((t,index)=>{
        return(
            <div key={index} className='box-item'>
                <h2 className='w-1/3 text-3xl'>{t.nome}</h2>
                <h2 className='w-1/3 text-2xl text-right'>{t.pontos}</h2>
                <div className='flex flex-col gap-2'>
                    <h2 className='button-alike ' onClick={()=>{handleDelete(t)}}>excluir</h2>
                    
                    {
                    //<Link to={`/customizar/${t.nome}`} state={t}><h2 className='button-alike '>editar</h2></Link>
                    }
        
                </div>
            </div>
        )
    })

    return (
        <div className='w-full h-full p-1  flex flex-col justify-between ' style={{position:'relative'}}>
            <div onClick={()=>{setAddPage(false)}} className='lista-items'>
                {listaTarefas}
            </div>
            <h2 onClick={()=>setAddPage(!addPage)} className="button-alike w-4/12 mr-4 ml-auto my-auto flex items-end justify-center">add new </h2>
            {addPage && <AddNewElemento/>}
        </div>
    )
}

export default ListaTarefas