import {redisInit, setValue,getValue} from '../services/redis';

export async function broScoreName(name:string){
       // await setValue("sudo score","0");
       let finalAns:string=await getValue(name+" score")
       console.log(finalAns)
       if(finalAns!==null){
        return finalAns
       }
       else{
        return "NULL"
       }

}