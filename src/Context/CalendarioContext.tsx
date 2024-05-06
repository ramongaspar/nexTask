//Contexto contendo o objeto calendário e suas funções

import { createContext,} from "react";
import anoPresente from "../dataCaledario";

export const CalendarioContext = createContext(
   {calendario:anoPresente}
)

export const CalendarioProvider = CalendarioContext.Provider