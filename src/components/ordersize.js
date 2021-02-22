export function pf(a){
    return(parseFloat(a))
}

export function precisionRound(num,by){
    if (num == Math.floor(num)) {
        return Number(pf(num).toPrecision(by));
     } else {
        return num.toPrecision(by);
     }
}

export function positionSizeCalc(infoarray){
    let infonames = ["Quantity","Risk","Entry","Stoploss","Takeprofit"];
    for (var i = 0; i < infoarray.length; i++) {
        let k = infoarray[i];
        k = pf(k);
        if(isNaN(k)|k==0){
            let whatdidit = infonames[i];
            throw whatdidit+" Undefined";
        }
    }
    //returning variables variables
    let islong;
    let quantity;
    let tpslratio;

    //user passed variables
    let q = infoarray[0];
    let r = infoarray[1];
    let en = infoarray[2];
    let sl = infoarray[3];
    let tp = infoarray[4];

    if(!(r<=100&&sl!==tp&&sl!==en&&tp!==en&&r>=0.5)){
        throw "Invalid Params for Ordersize Calculation"
    }

    if(sl < tp&&en>sl&&en<tp){
        islong = true;
        quantity = (q*(r/((1-(sl/en))*100)))
        tpslratio = ((tp-en)/(en-sl)).toFixed(2);

    }else if(sl > tp&&en<sl&&en>tp){
        islong = false;
        quantity = (q*(r/((1-(en/sl))*100)));
        tpslratio = ((en-tp)/(sl-en)).toFixed(2);
    }

    let tpgain = ((r*tpslratio).toFixed(2));
    quantity = precisionRound(quantity, 5)
    console.log(quantity)
    console.log(islong)
    return([quantity,islong,tpslratio,tpgain])
} 
