export interface users{
    name:string;
    //applied ? in id bcz in reactive type form we needed id but we were not having id bcz it was not created and was giving error 
    id?:number;
    email:string;
    age:number
}