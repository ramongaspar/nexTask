//Calendário

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

export class Dia{
    nome:string
    tarefas:Tarefa[]
    comentario:string
    status:string
    constructor(nome:string, tarefas = new Array(9), comentario = '', status = '' ){
        this.nome = nome
        this.tarefas = tarefas
        this.comentario = comentario
        this.status = status
    }
    setComentario(comentario:string){
        this.comentario = comentario
    }
    addTarefa(t:Tarefa){
        let i = 0
        while(this.tarefas[i]){
            i++
            if (i===9){return console.log('LOTOU')}
        }
        this.tarefas[i] = t
    }
    getTotalDayPoints(){
        const pontos:number[] = this.tarefas.map((t)=>{ 
            if(!t.completa) return parseInt(t.pontos) 
            else return 0 
        })
        const totalPoints = pontos.reduce((acc,ponto)=>   acc + ponto, 0)
        return totalPoints
    }
}

export class Mes{
    nome:string
    dias:Dia[]
    constructor(nome:string, nDias:number ){
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
    setDias(d:Dia[]){
        this.dias = d 
    }
}

export class Calendario {
    ano:string
    meses:Mes[]
    constructor(ano:string = '2024'){
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

// const anoPresente = new Calendario('2024')
// const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
// const dias = ['Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado', 'Domingo']
// anoPresente.createMonths(meses)
// anoPresente.generateDays(0, 0, dias)
// console.log(anoPresente)

// localStorage.setItem('calendario', JSON.stringify(anoPresente))
const anoPresente = JSON.parse(localStorage.getItem('calendario') !)
const calendarioRecuperado = new Calendario
const recuperarCalendario = (calendario:Calendario, calendarioRecuperado:Calendario)=>{
    if(calendario){
       for(let i = 0; i<12; i++){
            const mes = new Mes(calendario.meses[i].nome, 0)
            //recompondo dias
            for (let y = 0; y<31; y++){
                const dia = calendario.meses[i].dias[y]
                if(dia){
                    //recompondo tarefas
                    for(let z = 0; z<10;z++){
                        if(dia.tarefas[z]){
                            const tarefa = new Tarefa(dia.tarefas[z].nome,dia.tarefas[z].pontos,dia.tarefas[z].descricao)
                            dia.tarefas[z] = tarefa
                        }
                        
                        const d = new Dia(dia.nome,dia.tarefas,dia.comentario,dia.status)
                        calendario.meses[i].dias[y] = d
                    }
                    const d = calendario.meses[i].dias
                    mes.setDias(d)
                }
            }
            calendarioRecuperado.meses[i] = mes 
       }
    }
}
recuperarCalendario(anoPresente, calendarioRecuperado)



console.log(calendarioRecuperado)
export default calendarioRecuperado


