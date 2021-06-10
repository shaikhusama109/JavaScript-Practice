temp(85);

function temp(gpuTemp) {

    const tempLimit = 80;
    const pointPerTemp = 5;

    if (gpuTemp <= tempLimit) {
        console.log('GPU Temprature is Good, Temprature is' + ' ' + gpuTemp);
    }
    else {
        const points = Math.floor((gpuTemp - tempLimit / pointPerTemp));
        if (points >= 4)
            console.log('Temprature too High PC needs to shutdown, Temprature is ' + ' ' + gpuTemp);
        else
            console.log(gpuTemp);
    }



}