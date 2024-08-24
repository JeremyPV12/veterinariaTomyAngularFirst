export const serviceList : Service[] = [
    {id:1 , name:"Tratamientos", activities:['Cuidar','Velar'] , description:'Cuidamos a vuestros animales de la mejor forma posible' },
    {id:2 , name:"Vacunas", activities:['Cuidar','Velar'] , description:'Cuidamos a vuestros animales de la mejor forma posible' },
    {id:3 , name:"operaciones", activities:['Cuidar','Velar'] , description:'Cuidamos a vuestros animales de la mejor forma posible' },
    {id:4 , name:"Lavados", activities:['Cuidar','Velar'] , description:'Cuidamos a vuestros animales de la mejor forma posible' },
    /* {id:1 , name:"Tratamientos", activities:['Cuidar','Velar'] , description:'Cuidamos a vuestros animales de la mejor forma posible' },
    {id:1 , name:"Tratamientos", activities:['Cuidar','Velar'] , description:'Cuidamos a vuestros animales de la mejor forma posible' } */
    
]

export interface Service{
    id : number | string,
    name : string ,
    activities : string[],
    description : string
}