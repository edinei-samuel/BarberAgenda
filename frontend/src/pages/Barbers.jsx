import React from 'react'
import { useParams } from 'react-router-dom'

const Barbers = () => {

  const {services} = useParams();

  console.log(services);

  return (
    <div>
        
    </div>
  )
}

export default Barbers