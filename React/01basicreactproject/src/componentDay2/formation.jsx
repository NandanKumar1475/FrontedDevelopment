import './formation.css'
function Formation() {
    let a = 10;
    let menu = [{
        id: 1,
        name: "gulam jamun",
        price: 200
    },
    {
        id: 2,
        name: "jamun",
        price: 50
    }, {
        id: 3,
        name: "gulam",
        price: 30
    }
        , {
        id: 4,
        name: "panner",
        price: 630
    }
        , {
        id: 5,
        name: "jalebi",
        price: 130
    }
        , {
        id: 6,
        name: "rasugulla",
        price: 300
    }



    ];
    return (
        <>
            <h1>The formation concept in js</h1>
            <h2> the value of a is {a}</h2>

            {/* map method  */}

            {menu.map((item) => {
                return (
                    <>
                        <p>The name of dish is {item.name} and the price is {item.price}</p>
                    </>
                )
            })}
            <h1>menu in Shawez halwayi</h1>

            <table cellPadding={{}}>

                <tr>
                    <th>id</th>
                    <th>Dishname</th>
                    <th>price</th>
                </tr>
                {menu.map((item) => {
                    return (
                        <>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                            </tr>

                        </>
                    )
                })}

            </table>



        </>
    )


}
export default Formation;