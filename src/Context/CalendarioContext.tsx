//Contexto contendo o objeto calendário e suas funções

import { createContext,} from "react";
import anoPresente, { Dia } from "../dataCaledario";

export const CalendarioContext = createContext(
   {calendario:anoPresente,editCalendario:(dia:Dia,mes:string,indexDia:number)=>{}}
)

export const CalendarioProvider = CalendarioContext.Provider