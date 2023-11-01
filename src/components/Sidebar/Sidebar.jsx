import React from 'react'
import './Sidebar.css'
import Category from './Category'
import Price from './Price'

function Sidebar({handleChange}) {
  
  return <>
    <section className="sidebar">
        <div className="logo-container">
            <h1>🛒</h1>
        </div>
        <Category handleChange = {handleChange}/>
        <Price handleChange = {handleChange}/>
    </section>
  </>
}

export default Sidebar