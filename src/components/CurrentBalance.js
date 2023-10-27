import React from 'react'
import { useSelector } from 'react-redux'

const CurrentBalance = () => {

    const amount=useSelector(state=>state.amount)

  return (
    <div>
        <button disabled={true} className='btn btn-primary btn-sm'>Main Balance: {amount}</button>
    </div>
  )
}

export default CurrentBalance