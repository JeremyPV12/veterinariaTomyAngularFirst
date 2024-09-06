export const serviceList : Service[] = [
    {id:1 , name:"Tratamientos", activities:['Una pasion por la curacion','Lo mejor para ti','Un legado de excelencia','Siempre cuidando','Velando'] , description:'Cuidamos a vuestros animales de la mejor forma posible Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.' },
    {id:2 , name:"Vacunas", activities:['Una pasion por la curacion','Lo mejor para ti','Un legado de excelencia','Siempre cuidando','Velando'] , description:'Cuidamos a vuestros animales de la mejor forma posible Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et. ' },
    {id:3 , name:"Operaciones", activities:['Una pasion por la curacion','Lo mejor para ti','Un legado de excelencia','Siempre cuidando','Velando'] , description:'Cuidamos a vuestros animales de la mejor forma posible  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.' },
    {id:4 , name:"Lavados", activities:['Una pasion por la curacion','Lo mejor para ti','Un legado de excelencia','Siempre cuidando','Velando'] , description:'Cuidamos a vuestros animales de la mejor forma posible  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.' },
    /* {id:1 , name:"Tratamientos", activities:['Cuidar','Velar'] , description:'Cuidamos a vuestros animales de la mejor forma posible' },
    {id:1 , name:"Tratamientos", activities:['Cuidar','Velar'] , description:'Cuidamos a vuestros animales de la mejor forma posible' } */
    
]

export interface Service{
    id : number ,
    name : string ,
    activities : string[],
    description : string
}