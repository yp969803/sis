import {redisInit, setValue,getValue} from '../services/redis';

export async function broScoreB26(){
    //for testing
    // let obj:object=[{name:"yash",score:0}]
    // let newS:string=JSON.stringify(obj);
    // await setValue("f22",newS)
    let finalAns:string=await getValue('f22');

    console.log(finalAns)
    console.log(newS)
    return finalAns;
}
