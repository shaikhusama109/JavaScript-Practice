// Falsy (False)
// undefined
// null 
// 0
// ''
// NaN
// false

// let userSettings = 'High';
// let recommendedSettings = 'Medium';

// let settigns = userSettings || recommendedSettings;

// console.log(settigns);

let userSettings = undefined;
let recommendedSettings = 'Medium';

let settigns = userSettings || recommendedSettings;

console.log(settigns);