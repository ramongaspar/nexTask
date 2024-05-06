//ESTRUTURAS UTILIZADAS NO APP

//Elemento com propriedades de tarefa e recompensa; nó para adicionar a tabela, e tabela.
export class Elemento{
    nome:string
    pontos:string
    usos:number
    descricao:string
    constructor(nome:string,pontos:string,usos:number = 0,descricao:string){
        this.nome = nome 
        this.pontos = pontos
        this.usos = usos
        this.descricao = descricao
    }
    addUso():void{
        this.usos++
    }
}
export class Node{
    chave:number
    element:Elemento
    next:Node|null
    constructor(chave:number, el:Elemento, next:Node|null){
        this.chave = chave
        this.element = el
        this.next = next
    }
}
export class Tabela{
    tabela:Node[]|[]
    constructor(t=null){
        this.tabela = t || new Array(27) 
    }
    hashFunction(stringNome:string){
        const hash = stringNome.toUpperCase()
        return hash.charCodeAt(0) - 'A'.charCodeAt(0)
    }
    addEl(el:Elemento){
        const hash = this.hashFunction(el.nome)
        const newNode = new Node(hash, el, null)
        if(!this.tabela[hash]){
            this.tabela[hash] = newNode
            return console.log('Adicionado', newNode)
        }
        else{
            let temp = this.tabela[hash]
            while(temp.next){
                temp = temp.next
            }
            temp.next = newNode
            return console.log('Adicionado', newNode)
        }
    }
    getEl(elemento:string){
        const hash = this.hashFunction(elemento)
        let temp:Node|null = this.tabela[hash]
        let curr:Elemento
        while(temp){ 
            curr = temp.element
            if ((curr.nome).toUpperCase() === elemento.toUpperCase()) return curr;
            temp = temp.next
        }
        return null
    }
    listItems(){
        const temp = this.tabela
        const items: {}[] = []
        let node;
        for (let i = 0; i < 28; i++){
            node = temp[i]
            while (node){
                let curr = node.element
                let item = {
                    nome:curr.nome,
                    pontos:curr.pontos,
                    usos:curr.usos,
                    descricao:curr.descricao
                }
                items.push(item)
                node = node.next
            }
        }
        return items
    }
    changeUso(nome:string){
        const hash = this.hashFunction(nome)
        let temp:Node|null = this.tabela[hash]
        let curr:Elemento
        let usos
        while(temp){ 
            curr = temp.element
            if ((curr.nome).toUpperCase() === nome.toUpperCase()) {
                if (curr instanceof Elemento) {
                    curr.addUso();
                    usos = curr.usos
                    break;
                }
            }
            temp = temp.next
        }
        return usos

    }
}

//                                          FETCHING ITENS LOCALSTORAGE

    //Pontos
export const myPoints = parseInt(JSON.parse(localStorage.getItem('pontos')!))
    //Histórico
export const history = JSON.parse(localStorage.getItem('historico')!)
    //Tabelas
const tRecompensa = JSON.parse( localStorage.getItem('tabelaDeRecompensas') !) 
const tTarefa     = JSON.parse( localStorage.getItem('tabelaDeTarefas')     !)
    //Recuperando propriedades dos elementos na tabela
const tRRecuperada = new Tabela
const tTRecuperada = new Tabela
const recuperarTabela = (tabela:Tabela, tabelaRecuperada:Tabela)=>{
    if(tabela){
        tabela.tabela.forEach((nodeData:any) => {
            console.log(' as ', nodeData)
            let temp = nodeData
            while(temp){
                const curr = (nodeData.element)
                const el = new Elemento(curr.nome,curr.pontos,curr.usos,curr.descricao)
                tabelaRecuperada.addEl(el)
                temp = temp.next
            }
        });
    }
}
recuperarTabela(tRecompensa, tRRecuperada)
recuperarTabela(tTarefa, tTRecuperada)



//                                          CRIANDO REFERÊNCIAS

//Tabelas
export const tabelaTarefas:Tabela     = tTRecuperada 
export const tabelaRecompensas:Tabela = tRRecuperada 
//Calendário
export const ano = [
    {  
        mes:'janeiro',
        dias:[
            {
                nome:'',
                pontos:'',
                descricao:'',
                feita:false,
                comentario:''
            },
            {
                nome:'',
                pontos:'',
                descricao:'',
                feita:false,
                comentario:''
            },
            {
                nome:'',
                pontos:'',
                descricao:'',
                feita:false,
                comentario:''
            },
            {
                nome:'',
                pontos:'',
                descricao:'',
                feita:false,
                comentario:''
            },
            {
                nome:'',
                pontos:'',
                descricao:'',
                feita:false,
                comentario:''
            },
            {
                nome:'',
                pontos:'',
                descricao:'',
                feita:false,
                comentario:''
            }
        ]
    },
    {
        mes:'fevereiro',
        dias:[
            {
                nome:'',
                pontos:'',
                descricao:'',
                feita:false,
                comentario:''
            },
            {
                nome:'',
                pontos:'',
                descricao:'',
                feita:false,
                comentario:''
            },
            {
                nome:'',
                pontos:'',
                descricao:'',
                feita:false,
                comentario:''
            },
            {
                nome:'',
                pontos:'',
                descricao:'',
                feita:false,
                comentario:''
            },
            {
                nome:'',
                pontos:'',
                descricao:'',
                feita:false,
                comentario:''
            },
            {
                nome:'',
                pontos:'',
                descricao:'',
                feita:false,
                comentario:''
            },
            {
                nome:'',
                pontos:'',
                descricao:'',
                feita:false,
                comentario:''
            },
            {
                nome:'',
                pontos:'',
                descricao:'',
                feita:false,
                comentario:''
            },
            {
                nome:'',
                pontos:'',
                descricao:'',
                feita:false,
                comentario:''
            },
            {
                nome:'',
                pontos:'',
                descricao:'',
                feita:false,
                comentario:''
            },
            {
                nome:'',
                pontos:'',
                descricao:'',
                feita:false,
                comentario:''
            },
            {
                nome:'',
                pontos:'',
                descricao:'',
                feita:false,
                comentario:''
            },
            {
                nome:'',
                pontos:'',
                descricao:'',
                feita:false,
                comentario:''
            },
            {
                nome:'',
                pontos:'',
                descricao:'',
                feita:false,
                comentario:''
            },
            {
                nome:'',
                pontos:'',
                descricao:'',
                feita:false,
                comentario:''
            },
            {
                nome:'',
                pontos:'',
                descricao:'',
                feita:false,
                comentario:''
            },
            {
                nome:'',
                pontos:'',
                descricao:'',
                feita:false,
                comentario:''
            },
            {
                nome:'',
                pontos:'',
                descricao:'',
                feita:false,
                comentario:''
            },
            {
                nome:'',
                pontos:'',
                descricao:'',
                feita:false,
                comentario:''
            },
            {
                nome:'',
                pontos:'',
                descricao:'',
                feita:false,
                comentario:''
            },
            {
                nome:'',
                pontos:'',
                descricao:'',
                feita:false,
                comentario:''
            },
            {
                nome:'',
                pontos:'',
                descricao:'',
                feita:false,
                comentario:''
            },
            {
                nome:'',
                pontos:'',
                descricao:'',
                feita:false,
                comentario:''
            },
            {
                nome:'',
                pontos:'',
                descricao:'',
                feita:false,
                comentario:''
            },
            {
                nome:'',
                pontos:'',
                descricao:'',
                feita:false,
                comentario:''
            },
            {
                nome:'',
                pontos:'',
                descricao:'',
                feita:false,
                comentario:''
            },
            {
                nome:'',
                pontos:'',
                descricao:'',
                feita:false,
                comentario:''
            },
            {
                nome:'',
                pontos:'',
                descricao:'',
                feita:false,
                comentario:''
            },
            {
                nome:'',
                pontos:'',
                descricao:'',
                feita:false,
                comentario:''
            }
        ]
    },
    
]

