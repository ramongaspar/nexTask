//Roteamento, Browser History.

import { createBrowserRouter } from "react-router-dom";
import Menu from "./Components/Menu";
import Progresso from "./Components/Tarefas/Progresso";
import Rewards from "./Components/Recompensas/Rewards";
import HistoricoRecompensa from "./Components/Recompensas/HistoricoRecompensa";
import Calendario from "./Components/Tarefas/Calendario/Calendario";
import TarefasCrud from "./Components/ConfigsComponents/TarefasCrud";
import Dia from "./Components/Tarefas/Calendario/Dia";

export const router = createBrowserRouter([
    {
      path:'/',
      element:<Menu></Menu>,
    },
    {
      path:'/progresso',
      element:<Progresso></Progresso>
    },
    {
      path:'/recompensas',
      element:<Rewards></Rewards>
    },
    {
      path:'/historico',
      element:<HistoricoRecompensa></HistoricoRecompensa>
    },
    {
      path:'/tarefas',
      element:<Calendario></Calendario>,
    },
    {
      path:':mes/:idx',
      element:<Dia></Dia>,
      loader:({params}) =>{
        return params
      },
      children:[
          {
            path:':tarefa/',
            element:<></>,
          }
        ]
          
    },
    
    {
      path:'/customizar',
      element:<TarefasCrud></TarefasCrud>
    }
  ])