import React, { useEffect } from 'react'
import { fetchGreetings, selectAllGreetings } from '../../redux/greetingSlice'
import { useDispatch, useSelector } from 'react-redux'

const Greeting = () => {
  const dispatch = useDispatch()
  const { entities } = useSelector((state) => state.greetings)
  useEffect(() => {
    dispatch(fetchGreetings())
  }, [dispatch]);

  return (
    <div>    
        <p>Random message: </p>       
        <p>{useSelector((state) => selectAllGreetings(state))}</p>
    </div>
  )
}

export default Greeting
