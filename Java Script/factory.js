function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('Draw ');
        },
    };
}

const circle1 = createCircle(1);
console.log(circle1);