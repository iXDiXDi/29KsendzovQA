// console.log(true && true);
// console.log(true && false);

// let item_1 = 0;
// let item_2 = 20;
// // let item_3 = (item_2 > 50)? console.log("Idi Kuhat'") : console.log(Hodi golodny)


// while(item_1 < 20 && item_2 < 30) {
//     console.log(item_1, " = Idi Kushat'")
//     console.log(item_2, " = -----" );
//     item_1++
//     item_2++
// } 
// let temperature = 0;

// while(temperature < 40) {

//     if (temperature < 10){
//         console.log("temperature = ", temperature, "holodno");
//     } else if (temperature >= 10 && temperature < 30){
//         console.log("temperature = ", temperature, "HOROSHO!!!!");
//     } else {
//         console.log("temperature = ", temperature, "JHARA");

//     }
//     temperature++
// }
// for (let temperature = 0; temperature < 10; temperature += 2){
    
//     if (temperature < 3){
//                 console.log("temperature = ", temperature, "holodno");
//             } else if (temperature >= 3 && temperature < 7){
//                 console.log("temperature = ", temperature, "HOROSHO!!!!");
//             } else {
//                 console.log("temperature = ", temperature, "JHARA");

// //     // console.log(i, "= FOR");
// }
// }

let names = [
    'Kate',
    'Alex',
    'Ivan',
    'Ignat',
    'Andrey',
    'Vika']
for (item_1 of names){

    if (item_1 == 'Ignat'){
        break;
    }
    console.log(item_1);
}