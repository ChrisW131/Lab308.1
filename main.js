// Trip total miles = 1,500

// 55mph=30mpg
// 60mph=28mpg
// 75mph=23mpg
// Fuel Budget=175
// Gas=3pg

const distance = 1500; // miles
const speed_1 = 55; //55 mph 
const speed_2 = 60; //60 mph
const speed_3 = 75; //75 mph

const fuel_efficiency_55 = 30 // fuel efficiency of 30 miles/gallon at 55mph
const fuel_efficiency_60 = 28 // fuel efficiency of 28 miles/gallon at 60mph
const fuel_efficiency_75 = 30 // fuel efficiency of 23 miles/gallon at 75mph

let budget = 175; // 175 dollars
let avg_fuel_cost = 3; // 3 dollars gallon

// how many gallons of fuel will you need for the entire trip?
let total_gallons_55 = distance * (1 / fuel_efficiency_55)
let total_gallons_60 = distance * (1 / fuel_efficiency_60)
let total_gallons_75 = distance * (1 / fuel_efficiency_75)

// How long for the trip?
let time_55 = distance * (1 / speed_1)
let time_60 = distance * (1 / speed_2)
let time_75 = distance * (1 / speed_3)

// Will your budget be enough for the trip?
let cost_55 = total_gallons_55 *avg_fuel_cost;
let cost_60 = total_gallons_60 *avg_fuel_cost;
let cost_75 = total_gallons_75 *avg_fuel_cost;

let enough_55 = budget > cost_55;
let enough_60 = budget > cost_60
let enough_75 = budget > cost_75

let results_55 = `At 55mph ${total_gallons_55} total gallons will be required for the trip. The cost will be ${cost_55}. The trip will take ${time_55} hours to complete. It is ${enough_55} that the budget is enough for the trip at 55mph`

let results_60 = `At 60mph ${total_gallons_60} total gallons will be required for the trip. The cost will be ${cost_60}. The trip will take ${time_60} hours to complete. It is ${enough_60} that the budget is enough for the trip at 60mph`

let results_75 = `At 75mph ${total_gallons_75} total gallons will be required for the trip. The cost will be ${cost_75}. The trip will take ${time_75} hours to complete. it is ${enough_75} that the budegt is enough for the trip at 75mph`

console.log(results_55);
console.log(results_60);
console.log(results_75);