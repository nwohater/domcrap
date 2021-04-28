
//FAKE API DATA
const jsonData = [{FirstName: 'Pete', LastName: 'Jackson', Age: "39", Sex: 'M'},{FirstName: 'Sheena', LastName: 'Bofeena', Age: "21", Sex: 'F'},{FirstName: 'Larry', LastName: 'Salas', Age: "24", Sex: 'M'}];

// EXTRACT VALUE FOR HTML HEADER.         
var col = [];
for (var i = 0; i < jsonData.length; i++) {
    for (var key in jsonData[i]) {
        if (col.indexOf(key) === -1) {
            col.push(key);
        }
    }
}

// CREATE DYNAMIC TABLE.
var table = document.createElement("table");

// CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
var tr = table.insertRow(-1);                   // TABLE ROW.

for (var i = 0; i < col.length; i++) {
    var th = document.createElement("th");      // TABLE HEADER.
    th.innerHTML = col[i];
    tr.appendChild(th);
}

// ADD JSON DATA TO THE TABLE AS ROWS.
for (var i = 0; i < jsonData.length; i++) {
    tr = table.insertRow(-1);
    for (var j = 0; j < col.length; j++) {
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = jsonData[i][col[j]];
    }
}

// FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
var divContainer = document.getElementById("people-table");
divContainer.innerHTML = "";
divContainer.appendChild(table);
    