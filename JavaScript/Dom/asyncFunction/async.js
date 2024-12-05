const apidata = document.getElementById("apidata");

async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json(); 
        console.log(data);

        const formattedData = JSON.stringify(data, null, 2);
        apidata.innerHTML = formattedData;
    } catch (error) {
        console.log(error);
        apidata.innerHTML = `<p>Error fetching data. Please try again later.</p>`;
    }
}
































