// To make this work you need to install json-server
//
// npm install -g json-server
//
// make sure you have the db.json created then do this:
// json-server --watch db.json


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
    table.classList = "table table-dark table-striped";
    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
    var tr = table.insertRow(-1);                   // TABLE ROW.

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");      // TABLE HEADER.
        th.innerHTML = col[i];
        tr.appendChild(th);
        
        //add modal labels 
        var modLabel = document.createElement("label");                   
        modLabel.setAttribute('value', col[i]);
        modLabel.classList = "modal-label"
        modLabel.innerText = col[i];
        document.getElementById("modal-body").appendChild(modLabel);         
        
        var lineBreak = document.createElement("br");
        document.getElementById("modal-body").appendChild(lineBreak);         

        //add modal input fields 
        var modal = document.createElement("Input");                   
        modal.setAttribute('type', 'text');
        modal.setAttribute('id', col[i]);
        modal.classList = "modal-input"                     
        document.getElementById("modal-body").appendChild(modal);  
        var lineBreak2 = document.createElement("br");
        document.getElementById("modal-body").appendChild(lineBreak2);         
    }
    var th = document.createElement("th");      // TABLE HEADER.
    th.innerHTML = 'Edit';
    tr.appendChild(th);

    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < jsonData.length; i++) {
        tr = table.insertRow(-1);
        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = jsonData[i][col[j]];
        }
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = '<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>'
    }

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("people-table");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
    
}

fetchPerson();

