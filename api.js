async function fetchText() {
    let response = await fetch('https://localhost:3000/people');

    console.log(response.status); // 200
    console.log(response.statusText); // OK
    
    if (response.status === 200) {
        let data = await response.text();
        console.log(data);
    }
}

fetchText();