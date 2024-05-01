import { createContext, useContext } from "react";

export const PointsContext = createContext({totalPontos:0,addPontos:(p:number)=>{}, subPontos:(p:number,r:string)=>{}})

export const PointsProvider = PointsContext.Provider