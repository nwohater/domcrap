
const jsonData = [{FirstName: 'Pete', LastName: 'Jackson', Age: "39", Sex: 'M'},{FirstName: 'Sheena', LastName: 'Bofeena', Age: "21", Sex: 'F'},{FirstName: 'Larry', LastName: 'Salas', Age: "24", Sex: 'M'}];

//jsonData.forEach(function(key) {
//    console.log(key);
//})

//for(var i = 0; i < jsonData.length; i++) {
    // get i-th object in the results array  


let tablehdrMarkup = '<table><tr>'
let numColumns = 0;    
var columnsIn = jsonData[0];

//build table header
for(var key in columnsIn){
    //console.log(key + ' : ' + jsonData[i][key]); // here is your column name you are looking for + its value
    tablehdrMarkup = tablehdrMarkup + '<th>' + key + '</th>'
    numColumns++;
    //console.log(key);
} 

tablehdrMarkup = tablehdrMarkup + '</tr>'

let tabledtlMarkup = ''

jsonData.forEach(function(people){
    for(i = 0; i < numColumns; i++) {
        
        tabledtlMarkup = tabledtlMarkup + '<tr><td>' + rec.key + '</td><td>'
    }
    //tabledtlMarkup = tabledtlMarkup = '<tr><td>' + people.FirstName + '</td><td>' + people.LastName + '</td><td>' + people.Age + '</td><td>' + people.Sex + '</td></tr>';
})

//let x = document.getElementById("people-table");
//x.innerHTML =  tablehdrMarkup + tabledtlMarkup; 
//console.log (tablehdrMarkup);
console.log (tabledtlMarkup);