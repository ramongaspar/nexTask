import { createContext,} from "react";
import { Elemento } from "../data";

export const CalendarioContext = createContext(
    [   
        {  
            mes:'',
            dias:[
                {
                    nome:'',
                    pontos:'',
                    descricao:'',
                    completo:false,
                    comentario:'',
                    tarefas:[Elemento,],
                },
            ],
        },
    ]
)

export const CalendarioProvider = CalendarioContext.Provider