const circle = {

    radius: 1,
    draw() {
        console.log('Draw');
    }
}

// for (let key in circle)
//     console.log(key);

// for (let entry of Object.entries(circle))
//     console.log(entry);

for (let key of Object.keys(circle))
    console.log(key);