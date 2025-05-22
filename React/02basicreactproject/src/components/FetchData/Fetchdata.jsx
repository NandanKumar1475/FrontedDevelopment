import React, { useState, useEffect } from "react";

const FetchData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3030/products");
                if (!response.ok) {
                    console.log("error");
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        };
        fetchData();
    }, []);

    return (
        <>
        <div className="dashboard">
            <h1>Products Available</h1>
            {
                data.map((item)=>{
                    return(
                        <>
                        <h2>Name : {item.name}</h2>
                        <span>price : {item.price}</span>
                        </>
                    )

                })
            }
        </div>


        </>
    );
};

export default FetchData;
