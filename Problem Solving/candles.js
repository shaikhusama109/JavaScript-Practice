let arr  = [];
let maximum = Math.max(...candles);

for(let item of candles){
    if(item === maximum){
        arr.push(item);
    }
}

return arr.length;