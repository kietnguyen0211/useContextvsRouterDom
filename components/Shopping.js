import AppContext from "../AppContext"
import { useContext } from "react"
import css from "../components/Shopping.css"
export default function Shopping(){
    const { buy } = useContext(AppContext)
    console.log(buy)
    return(
        <div>
           {
            buy.map((value,key)=>{
                return(
                    <div className="editQty" key={key}>
                        <h1> {value.Watch}  </h1>
                        <span>-</span>
                        <h2> {value.qty} </h2>
                        <span>+</span>
                    </div>
                )
            })
           }
        </div>
    )
}