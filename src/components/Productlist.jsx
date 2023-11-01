import React from 'react'
import "./productlist.css"



function Productlist({result}) {
  return <>
  <section className="card-container">
   {result}
  </section>
  </>
}

export default Productlist