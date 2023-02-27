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
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {getData.map((x) => {
          return (
            <div className='col'>
              <div className="card h-100">
                <img src={x.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{x.place}</h5>
                  <p className="card-text">{x.description}</p>
                  <p className="card-text">{x.dist}</p>
                  <button className="btn btn-primary">Explore More</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home;
