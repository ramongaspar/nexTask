//Roteamento, Browser History.

import { createBrowserRouter } from "react-router-dom";
import Menu from "./Components/Menu";
import Progresso from "./Components/Tarefas/Progresso";
import Rewards from "./Components/Recompensas/Rewards";
import HistoricoRecompensa from "./Components/Recompensas/HistoricoRecompensa";
import Calendario from "./Components/Tarefas/Calendario/Calendario";
import AddTarefa from "./Components/ConfigsComponents/AddNewElemento";
import Dia from "./Components/Tarefas/Calendario/Dia";
import Profile from "./Components/ConfigsComponents/Profile";
import Customizar from "./Components/ConfigsComponents/Customizar";
import EditElemento from "./Components/ConfigsComponents/EditElemento";


export const router = createBrowserRouter([
    {
      path:'/',
      element:<Menu></Menu>,
    },
    {
      path:'/profile',
      element:<Profile></Profile>
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
      path:'/lista-tarefas',
      element:<AddTarefa></AddTarefa>,
    },
    {
      path:'tarefas/:mes/:idx',
      element:<Dia></Dia>,
      loader:({params}) =>{
        return params
      },
      
    },
    {
      path:'/customizar',
      element:<Customizar></Customizar>
    },
    {
      path:'/customizar/:tarefa',
      element:<EditElemento></EditElemento>
    }
  ])