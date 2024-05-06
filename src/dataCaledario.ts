export class Tarefa{
    nome:string
    pontos:string
    completa:boolean
    descricao:string
    constructor(nome:string, pontos:string, descricao:string){
        this.nome = nome 
        this.pontos = pontos
        this.completa = false
        this.descricao = descricao
    }
    setCompleta(){
        this.completa = !this.completa
    }
    setDescricao(descricao:string){
        this.descricao = descricao
    }
    
}

class Dia{
    nome:string
    tarefas:Tarefa[]
    comentario:string
    status:string
    constructor(nome:string){
        this.nome = nome
        this.tarefas = new Array(9)
        this.comentario = ''
        this.status = ''
    }
    setComentario(comentario:string){
        this.comentario = comentario
    }
}

export class Mes{
    nome:string
    dias:Dia[]
    constructor(nome:string, nDias:number){
        this.nome = nome
        this.dias = new Array(nDias)
    }
    addDay(nome:string){
        const dia = new Dia(nome)
        let i = 0
        while(this.dias[i]){
            i++
        }
        this.dias[i] = dia
    }
}

export class Calendario {
    ano:string
    meses:Mes[]
    constructor(ano:string){
        this.ano = ano
        this.meses = new Array(12) 
    }
    //
    createMonths(meses:string[]){
       for(let i=0; i<meses.length;i++){
        let m:Mes
        if(i < 7){
            if(i % 2 === 0){
                m =  new Mes(meses[i], 31)
            }else if((meses[i]) === 'Fevereiro')
                m =  new Mes(meses[i], 29)
            else
                m =  new Mes(meses[i], 30)
        }else{
             if(i % 2 === 0) 
                m =  new Mes(meses[i], 30)
             else
                m =  new Mes(meses[i], 31)
        }
        this.meses[i] = m
       }
    }
    //
    generateDays(mesRef:number = 0, refDia:number, dias:string[]):any{
        if(mesRef === 12){
            return 'Completo.'
        }
        const mes = this.meses[mesRef]
        const diasMes = this.meses[mesRef].dias

        for(let y = 0 ;y < diasMes.length; y++){
            mes.addDay(dias[refDia])
            refDia++
            if(refDia === 7){
                refDia = 0
            }
        }
        mesRef++
        return this.generateDays(mesRef, refDia, dias)
       
    }
}

const anoPresente = new Calendario('2024')
const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
const dias = ['Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado', 'Domingo']
anoPresente.createMonths(meses)
anoPresente.generateDays(0, 0, dias)
console.log(anoPresente)


export default anoPresente
// const janeiro = (n, m) =>{
//     for(let i=n, i < m.length; i+=7){
//         m.nome = 'Segunda'
//     }
// }


