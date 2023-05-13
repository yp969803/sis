import {redisInit, setValue,getValue} from '../services/redis';

export async function batchPlusMinus(action:string){
    if(action==="++"){
        let f22People:string=await getValue("f22");
        console.log(f22People)
        let obj:object[]=await JSON.parse(f22People);
        
        
        (obj).forEach(async(elem)=>{
             let score:string=await getValue(elem.name+" score")
             let finalPersonScore:number=parseInt(elem.score)+1;
             let arg1:string=elem.name+" score";
             let arg2:string=finalPersonScore.toString();
             await setValue(arg1,arg2);
             elem.score=arg2;
        })   
            
    }
    else{
        let f22People:string=await getValue("f22");
        let obj:object[]=JSON.parse(f22People);
        (obj).forEach(async(elem)=>{
             let score:string=await getValue(elem.name+" score")
             let finalPersonScore:number=parseInt(elem.score)-1;
             let arg1:string=elem.name+" score";
             let arg2:string=finalPersonScore.toString();
             await setValue(arg1,arg2);
             elem.score=arg2;
        })  
    }
}