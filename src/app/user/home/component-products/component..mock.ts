export const listProduct : Product[] = [
    {id:1, name:'Ricocan', price: 10 , marca:'vinitapia' },
    {id:2, name:'Perritos', price: 5 , marca:'vinitapia' },
    {id:3, name:'Gatiros', price: 20 , marca:'vinitapia' },
    {id:4, name:'Comodin', price: 18 , marca:'vinitapia' },
    {id:5, name:'Comodin', price: 18 , marca:'vinitapia' },
]

export interface Product{
    id : number | string,
    name : string,
    price : number,
    marca: string
}