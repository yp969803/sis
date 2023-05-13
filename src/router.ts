import * as dotenv from 'dotenv';
import  {broScoreF22} from './scripts/broScoref22'
import  {broScoreB26} from './scripts/broScoreb26'
import  {broScoreName} from './scripts/broScoreName'
import { namePlusMinus } from './scripts/namePlusMinus';
dotenv.config();
export async function router(msg:any) {
    let lowerMsg:string=(msg.text).toLowerCase();
    let MsgWordArr:string[]=(lowerMsg).split(" ")
    console.log(msg.text)
    
    if(MsgWordArr.length===3&&MsgWordArr[0]==='bro'&&MsgWordArr[1]==='score'){

        if(MsgWordArr[2]==='f22'){
            let ans:string=await broScoreF22()
            return ans;
        }
        else if(MsgWordArr[2]==='b26'){
            let ans:string=await broScoreB26()
            return ans;
        }
        else{
            let ans:string=await broScoreName(MsgWordArr[2]);
            if(ans==='NULL'){
                return "No person with name "+MsgWordArr[2];
            }
            return ans;
        }
    }
    else if(MsgWordArr[1]==="++"&&MsgWordArr.length===2){
         let ans:string=await namePlusMinus(MsgWordArr[0],"++")
         if(ans==="NULL"){
            return "No person with name "+MsgWordArr[1];
         }
         return ans;
    }
    else if(MsgWordArr[1]==="--"&&MsgWordArr.length===2){
        let ans:string=await namePlusMinus(MsgWordArr[0],"--")
         if(ans==="NULL"){
            return "No person with name "+MsgWordArr[1];
         }
         return ans;
    }

    else if(MsgWordArr[0]==='bro'){
        console.log('hello')
        let str="";
        for( let i:number=1;i<MsgWordArr.length;i++){
             str=str+MsgWordArr[i]+" ";
        }
        let finalAns:string="Cannot define "+str;
        return finalAns;
     }
     else{
        console.log(msg)
        return "_";
     }
}