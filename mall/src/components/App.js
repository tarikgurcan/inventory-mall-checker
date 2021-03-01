import React from 'react'
import {useEffect, useState} from 'react'
import Categorylist from './Categorylist'
import Productlist from './Productlist'
import Navi from './Navi'
const App = () => {

  const [categories,setCategory]=useState([])
  const [products,setProducts]=useState([])
  const [currentCategory,setCurrentCategory]=useState("")
  const [cart,setCart]=useState([])

  const url="http://localhost:3000/"

  const getCategories =(url)=>{
    fetch(url+"categories")
    .then(resolve=>resolve.json())
    .then(data=>setCategory(data))
  }

  const getProducts=(url,id)=>{
    if(id){
      fetch(url+"products?categoryId="+id)
      .then(resolve=>resolve.json())
      .then(data=>setProducts(data))
    }
    else{
      fetch(url+"products")
    .then(resolve=>resolve.json())
    .then(data=>setProducts(data))
    }
    
  }

  useEffect(()=>{
    getCategories(url);
    getProducts(url,null)
    
  },[])



  const SelectCategory=(e)=>{
    const id=(e.target.id)
    const newCategory=(e.target.textContent)
    getProducts(url,id);
    setCurrentCategory(newCategory)
  }

  const addToCart = (product)=>{
    let newCart=[]
    cart.map((item=>{
      return (newCart.push(item))
    }))
    let newCartItem={
      productName:product.productName,
      quantity:1,
    }
    let cartIndex=newCart.find((item)=>{
      return item.productName===product.productName
    })
    if(cartIndex){
      cartIndex.quantity+=1;
      
    }
    else{
      newCart.push(newCartItem)
    }
    setCart(newCart)

  }
  const deleteitem=(e,selectedCart)=>{
    let removedCart=cart.filter((item)=>{
      return item.productName!==selectedCart.productName
    })
    console.log(removedCart)
    setCart(removedCart)
    e.preventDefault();
  }
  const resetAll=()=>{
    setCart([])
  }

  return (
      <div>
        <Navi cart={cart} deleteitem={deleteitem} resetAll={resetAll}/>
        <div className="container">
        <div className="row">
          <div className="col-3 mt-5">
            <Categorylist categories={categories} SelectCategory={SelectCategory} currentCategory={currentCategory}/>
          </div>
          <div className="col-9">
            <Productlist products={products} addToCart={addToCart}/>
          </div>
        </div>
        </div>
      </div>
    )
  }


export default App
