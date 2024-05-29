//Exibe o calendário.

import {  Outlet } from 'react-router-dom'

function Tarefas() {
  return (
    <div>
        <div>
            <Outlet></Outlet>
        </div>
        
    </div>
  )
}

export default Tarefas