import { createContext, useEffect, useState } from "react"
import axios from 'axios'
export const AppContext = createContext({})
export const AppProvider = ({children})=>{
    const [data,setData]=useState([])
    const [buy,setBuy]=useState([])

    const Add = (id) => {
        data.map((value)=>value.id == id ? setBuy([...buy,{...value,qty:1}]) : '')
    }
    console.log(buy)
    const getData = async () => {
        const url=`https://6468c255e99f0ba0a82c30d4.mockapi.io/products`

        axios
            .get(url)
            .then((res)=>{
                setData(res.data)
                console.log(res.data)
            })
            .catch((error)=>{
                console.log(error)
            })
    }

    useEffect(()=>{
        getData()
    },[])

    return (
        <AppContext.Provider value={{ data , Add, buy}}>
          {children}
        </AppContext.Provider>
      )
}
export default AppContext