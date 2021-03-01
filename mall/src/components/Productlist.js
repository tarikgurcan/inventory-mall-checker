import React from 'react'

const Productlist = ({products, addToCart}) => {
    return (
        <div>
            <h2>Products</h2>
            <table className="table table-striped mt-1">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Quantity Per Unit</th>
                    <th>Unit Price</th>
                    <th>Units In Stock</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product)=>{
                        return(
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.productName}</td>
                                <td>{product.quantityPerUnit}</td>
                                <td>{product.unitPrice}</td>
                                <td>{product.unitsInStock}</td>
                                <td><button className="btn btn-primary" onClick={(e)=>addToCart(product)}>Add</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Productlist
