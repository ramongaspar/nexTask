//Componente listando os dias presentes no Mês, gerando um Link para cad Dia

import { Link } from "react-router-dom"

function DiasEl({dia,mes, idx}:{dia:{},mes:string,idx:number}) {
  return (
    <Link className=" border" to={`/tarefas/${mes}/${idx.toString()}`} state={{dia:dia, index:idx}}>
      <div className=" border">
      </div>
    </Link>
  )
}

export default DiasEl