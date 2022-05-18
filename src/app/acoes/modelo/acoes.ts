export interface Acoes extends Array<Acao> {

}
export interface Acao {
id:number
codigo:string
descricao:string
preço:number
}
export interface AcoesAPI{
  payload: Acoes
}
