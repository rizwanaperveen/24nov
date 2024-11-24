import React from 'react'
import Child from './child'

const Parent = () => {
    let fullName = "Rizwana Perveen"
    let favFruit = "Mango"
    let favDish = "Biryani"
    let favDrink = "Juice"
  return (
    <div>
        <Child name={fullName} /> 
        <Child name={favFruit} />
        <Child name={favDish} /> 
        <Child name={favDrink} /> 
        <h1></h1>
    </div>
  )
}

export default Parent