import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";


// This is what my data is going to look like coming back from API
const apiDummyData = [
    {city: 'SLC', prices: "123234,23412,2134123"},
    {city: 'Murray', prices: "223234,23412,134123"},
]

// This is how recharts needs it
const dummyData =   [
    { name: "SLC", price: 500000 },
    { name: "Murray", price: 250000 },
  ]


  const Prices = () =>{
      const [prices, setPrices] = useState(null)
      useEffect(()=>{
          getPrices()
        },[])
        
        const normalizeChartData = (apiData) => {
            return apiData.map( cityData => {
                let pricesArray = cityData.prices.split(',')
                let sum = pricesArray.reduce((acumm, thing) => acumm += parseInt(thing), 0)
                let average = sum/pricesArray.length
          
                return {name: cityData.city, price: average.toFixed(2)}
            })
        } 
        
        const getPrices = async () => {
        try{
            // TODO: hookup to actual API
            let res = await axios.get('/api/prices')
            // since api is not hook we will not get here instead goes
            // to catch block
            const formattedData =  normalizeChartData(res.data)
            setPrices(formattedData)

        } catch(err){
            const formattedData1 =  normalizeChartData(apiDummyData)
            setPrices(formattedData1)
            console.log(err)
            console.log(err.response)
        }
    }
    const renderChart =()=> {
        if(!prices){
            return <p>loading</p>
        } else {
            return (
                <BarChart width={600} height={300} data={prices}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="price" fill="#82ca9d" />
              </BarChart>

            )
        }
    }
    return (
        <>
          <h1>prices page</h1>
           {renderChart()}
        </>
    )
}

export default Prices