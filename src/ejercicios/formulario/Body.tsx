import React from 'react'
import CardPost from './CardPost'

const Body = () => {
  return (
    <div>
        <p className='m-5 text-pink-600 font-bold'>Mas Recientes</p>
        <div>
            <CardPost/>
        </div>
    </div>
  )
}

export default Body