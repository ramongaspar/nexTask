//Contexto para as tabelas de recompensas e tarefas;
import { createContext } from "react";
import { Tabela} from "../data";


export const TabelasContext = createContext({tabelaRecompensas:new Tabela, tabelaTarefas:new Tabela, setTabelaRecompensa:()=>{},setTabelaTarefa:()=>{}})
export const TabelasProvider = TabelasContext.Provider 