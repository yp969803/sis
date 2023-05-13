import {redisInit, setValue,getValue} from '../services/redis';
export async function info(name:string){
//for testing
//   let sudoInfo:string="NAME-YASH KUMAR PATEL,BRANCH-ELECTRICAL,PHONEno-89241586465"

//   await setValue("sudo",sudoInfo)
  let info:string=await getValue(name);
  if(info!==null){
    return info;
  }
  else{
    return "No user with name "+name;
  }

}