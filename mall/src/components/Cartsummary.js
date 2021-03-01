import React from 'react'
import {DropdownItem} from "reactstrap"
const Cartsummary = ({cart, deleteitem}) => {
    return (
        <div>
            {cart.map((selectedCart,index)=>{
                return(
                <DropdownItem key={index} className="float-left">
                <span className="badge badge-pill badge-primary m-auto">{selectedCart.quantity}</span>
                  {selectedCart.productName}
                 <a href="#" className="float-right" onClick={(e)=>deleteitem(e,selectedCart)}>x</a>
                </DropdownItem>
                )
            })}
        </div>
    )
}

export default Cartsummary
