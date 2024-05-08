//Componente listando os dias presentes no Mês, gerando um Link para cad Dia

import { Link } from "react-router-dom"

function DiasEl({dia,mes, idx}:{dia:{nome:string,},mes:string,idx:number}) {
  return (
    <Link className="border" to={`/tarefas/${mes}/${idx.toString()}`} state={{dia:dia, index:idx}}>
      <div className=" border">
        <h2 className=" flex justify-evenly w-11/12 "><span >{dia.nome.slice(0,3)}</span> {idx+1 < 10 ? '0'+(idx+1).toString() : (idx+1).toString()} </h2>
      </div>
    </Link>
  )
}

export default DiasEl