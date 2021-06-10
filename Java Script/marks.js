const marks = [40, 58, 60];

student(marks);
function student(marks) {

    let sum = 0;
    for (let mark of marks)
        sum += mark;
    let avg = ((sum / 300) * 100);


    if (avg < 40) console.log('F')
    else if (avg < 50) console.log('D')
    else if (avg < 60) console.log('C')
    else if (avg < 70) console.log('B')
    else if (avg < 80) console.log('A')
    else console.log('A1')

}