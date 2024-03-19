export type productstype={
    id:string,
    name:string,
    title:string,
    image:string,
    description:string,
    price:string,
    // createdAt:string

}


export type produckttype={
    loading:boolean,
    products:productstype[],
    error:unknown,
    getproducts:()=>void,


}