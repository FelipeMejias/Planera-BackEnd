
export function graphicMark(item:any){
    const {begin,end}=item
    const graphBegin=Math.round(convertTime(begin)*100)
    const graphEnd=Math.round(convertTime(end)*100)
    const distance=graphEnd-graphBegin
    if(distance<=0)throw{type:'bad request'}
    return {...item,
        begin:formatTime(begin),
        end:formatTime(end),
        floor:graphBegin,
        size:(distance)
    }
}

function formatTime(str:string){
    const len = str.length
    if(len===5)return str[0]+str[1]+':'+str[3]+str[4]
    if(len===4)return str[0]+':'+str[2]+str[3]
    if(len===2)return str[0]+str[1]+':00'
    if(len===1)return str[0]+':00'
}

function convertTime(str:string){
    const len = str.length
    if(len===5)return parseInt(str[0]+str[1])+parseInt(str[3]+str[4])/60
    if(len===4)return parseInt(str[0])+parseInt(str[2]+str[3])/60
    if(len===2)return parseInt(str[0]+str[1])
    if(len===1)return parseInt(str[0])
}

export function concat_orderByFloor(l1:any[],l2:any[]){
    let i1=0
    let i2=0
    const resp=[]
    if(l1.length===0)return l2
    if(l2.length===0)return l1
    for(let k=1;k<=l1.length+l2.length;k++){
        if(i1===l1.length){resp.push(l2[i2]);i2++;continue;}
        if(i2===l2.length){resp.push(l1[i1]);i1++;continue;}
        if(l1[i1].floor<=l2[i2].floor){
            resp.push(l1[i1])
            i1++
        }else{
            resp.push(l2[i2])
            i2++
        }
    }
    return resp
}