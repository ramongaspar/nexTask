import { Link, Outlet } from "react-router-dom"

function Menu() {
  return (
    <div  className="flex flex-col h-full justify-between">
    
      <div style={{backgroundImage:`url(../src/assets/images/arvoreCerebral.jpg)`, backgroundSize:'cover'}} className='shadow h-5/6 flex gap-4 items-center justify-center pb-8'>
        
        <div className="flex h-1/2 w-full justify-between px-4 pr-8  text-2xl items-end">
         
            <h2 ><Link to={'/progresso'}> Ver as tarefas </Link></h2>
       
            <h2 ><Link to={'/recompensas'}> Recompensas  </Link></h2>
       
        </div>
        
      </div>

    </div>
      
    
  )
}

export default Menu