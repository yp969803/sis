import {redisInit, setValue,getValue} from '../services/redis';
export async function namePlusMinus(name:string,action:string){
    if(action==="++"){
        let personScore:string=await getValue(name+" score");
    if(personScore!==null){
        let finalPersonScore:number=parseInt(personScore)+1;
        let arg1:string=name+" score";
        let arg2:string=finalPersonScore.toString();
        await setValue(arg1,arg2);
        return "Congo "+name+" you get ++.You are now at "+arg2;
    }
    else{
        return "NULL"
    }
    }
    else if(action==="--"){
        let personScore:string=await getValue(name+" score");
    if(personScore!==null){
        let finalPersonScore:number=parseInt(personScore)-1;
        let arg1:string=name+" score";
        let arg2:string=finalPersonScore.toString();
        await setValue(arg1,arg2);
        return "Oops "+name+" you get --.You are now at "+arg2;
    }
    else{
        return "NULL"
    }
    }
    else{
        return "Wrong Action"
    }
}
