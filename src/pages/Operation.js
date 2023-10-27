import React from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '../state/index'
import { bindActionCreators } from 'redux'

const Operation = () => {

    const dispatch=useDispatch()

    const {depositMoney,WithdrawMoney}=bindActionCreators(actions,dispatch)

  return (
    <div>
        <div className='text-white'>
            <span>Deposit/Withdraw Money</span>
            {/* <button type='button' className='btn btn-dark mx-2' onClick={()=>{dispatch(actions.WithdrawMoney(100))}}>-</button>
            Add To Bag
            <button type='button' className='btn btn-success mx-2' onClick={()=>{dispatch(actions.depositMoney(100))}}>+</button> */}

            <button type='button' className='btn btn-dark mx-2' onClick={()=>{WithdrawMoney(100)}}>-</button>
            Add To Bag
            <button type='button' className='btn btn-success mx-2' onClick={()=>{depositMoney(100)}}>+</button>
        </div>

    </div>
  )
}

export default Operation