
import { useState } from 'react';
import './App.css';
import  Navbar  from './components/Navbar';

import Productlist from './components/Productlist';
import Recommended from './components/Recommended';
import Sidebar from './components/Sidebar/Sidebar';
import products from "./components/Data"
import Productcard from './components/Productcard';
import './index.css';
function App() {
  const [selectedCategory,setSelectedCategory] = useState(null)
  // input filter
  const [Query, setQuery] = useState("")

  const handleInputChange = event =>{
    setQuery(event.target.value)
  }
  const filteredItems = products.filter(product => product.title.toLocaleLowerCase().indexOf(Query.toLocaleLowerCase())!==-1 )

  //radio filter
  const handleChange = event =>{
    setSelectedCategory(event.target.value)
  }
  // button filter
  const handleClick =event =>{
    setSelectedCategory(event.target.value)
  }
  function filteredData(products,selected,query){
    let filteredProducts = products
    // filtering input items
    if(query){
      filteredProducts  = filteredItems

    }
    // selected filter
    if(selected) {
      filteredProducts = filteredProducts.filter(({category,color,company,newPrice,title}) => 
       category === selected||
       color === selected||
       newPrice === selected|| 
       company === selected || 
       title === selected );
    }
    return filteredProducts.map(({img,title,star,reviews,prevPrice,newPrice})=>(
      <Productcard key ={Math.random()}
      img = {img}
      title = {title}
      star = {star}
      reviews = {reviews}
      prevPrice={prevPrice}
      newPrice = {newPrice}
      />
      


    ));
  }
  const result = filteredData(products,selectedCategory,Query);
  return (
    <div className="App">
     <>
      <Sidebar handleChange = {handleChange}/>
      <Navbar Query = {Query} handleInputChange = {handleInputChange}/>
      <Recommended handleClick={handleClick}/>
      <Productlist result = {result}/>
     </>
      
    </div>
  );
}

export default App;
