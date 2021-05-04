
var data = '';

async function fetchPerson() {
    let response = await fetch('http://localhost:3000/people');

    console.log(response.status); // 200
    console.log(response.statusText); // OK
    
    if (response.status === 200) {
        data = await response.json();
        //console.log(data);
        createSelect(data);
    }
}

function createSelect(data) {
    var values = data;
 
    var select = document.createElement("select");
    select.name = "people";
    select.id = "peeps";        
    select.addEventListener(
        'change',
        function() { createTable(values); },
        false
     );
    console.log (values);
    //for (const val of values)
    for (let i = 0; i < values.length; i++) {
        var option = document.createElement("option");
        option.value = values[i];
        option.text = values[i].FirstName;
        //option.text = val.charAt(0).toUpperCase() + val.slice(1);
        select.appendChild(option);
      
                
        //Logger.log(data[i].display_name);
    }
    
    var label = document.createElement("label");
    label.innerHTML = "Choose your pets: "
    label.htmlFor = "pets";    
    document.getElementById("container").appendChild(label).appendChild(select);
}

function createTable(jsonData) {
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
    
}

fetchPerson();

