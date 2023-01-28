import React, { useState, useEffect } from 'react'


const Home = () => {
    const [getData, setGetData] = useState([])
    console.log(getData)
    const getHome = async () => {
        const response = await fetch('http://localhost:3001/findLocation')
        const data = await response.json()
        console.log(data.data)
        setGetData(data.data)
    }
    useEffect(() => {
        getHome()
    }, [])

    return (
        <div className="container">
            <div className="row">
                {
                    getData.map((x) => {
                        return (
                            <div className='col-md-4 p-3'>
                                <img className='tab-pane active' src={x.image} alt="imag" style={{ width: "500px" }} />
                                <div>{x.place}</div>
                                <div>{x.description}</div>
                                <div>{x.dist}</div>
                                <button>Explore More</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home