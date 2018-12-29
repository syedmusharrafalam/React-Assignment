console.log("Assignment 1")
const athleteData = [
    { athlete: 'Lionel Messi', team: 'Barcelona', income: 40000000 },
    { athlete: 'Cristiano Ronaldo', team: 'Juventus', income: 30000000 },
    { athlete: 'Neymar', team: 'Paris Saint-Germain', income: 36800000 },
    { athlete: 'Eden Hazard', team: 'Chelsea', income: 10400000 },
    { athlete: 'Mohamed Salah', team: 'Liverpool', income: 4680000 },
    { athlete: 'Kylian Mbappé', team: 'Paris Saint-Germain: An American Musical', income: 17500000 },
    { athlete: 'Luka Modrić', team: 'Real Madrid', income: 9360000 },
    { athlete: 'Harry Kane', team: 'Tottenham Hotspurs', income: 17600000 },
    { athlete: 'Kevin De Bruyne', team: 'Manchester City', income: 5980000 },
    { athlete: 'Paul Pogba', team: 'Manchester United', income: 15080000 }
];

var athleteIncomeStrings = athleteData.map( arr => {
    return arr;
})
 
console.log(athleteIncomeStrings);
console.log("Assignment 2")
// Assignment 2

var result = athleteData.filter(arr => {

 return arr.athlete === "Cristiano Ronaldo" 
});

console.log(result);

// Assignment 3
console.log("Assignment 3")
var popular = athleteData.filter( arr => {
    var content = arr.income > 10000000;
    return content; 
}).map( arr => {
    return `${arr.athlete} has income of more than 10000000`;
})

console.log(popular);