type NonNullableMobile = {
    
   
    // constructor(
         mobileId:string,
         texture:string,
         price:number,
         category:string,
         length:number,

         width:number,
         material:string,
         rating:number,
         description:string,
         brand:string,

         model:string,
         ram:number,
         storage:number,
         os:string,
         manufacturer:string,
         
         battery:number,
         weight:number,
         displayTechnology:string,
         color:string
        
}
type Nullable<T> = { [P in keyof T]: T[P] | null; }
export type Mobile = Nullable<NonNullableMobile>
