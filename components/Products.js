import css from "../components/Products.css"
import { FiShoppingCart } from 'react-icons/fi';
import { useContext, useState } from "react"
import AppContext from "../AppContext"
import svg from "../components/svg.jpg"
export default function Products(){
    const { data, Add } = useContext(AppContext)
    return(
        <div className="Products">
            {
                data.map((value,key)=>{
                    return(
                        <div className="Product" key={key}>
                           <div className="content">
                                
                                <img src={svg} style={{width:"350px"}}></img>
                                <div className="innerContent">
                                    <h1>Rolex</h1>
                                    <h2>Quality: {value.Number}</h2>
                                    <h3>{value.National}</h3>
                                    <div className="buy">
                                        <button onClick={() => Add(value.id) }>Buy Now</button>
                                        <i><FiShoppingCart/></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}