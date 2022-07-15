import React ,{useState}from 'react'
import { increment, decrement , increaseByAmount, reset } from './counterSlice'
import { useSelector , useDispatch } from 'react-redux'


const Counter = () => {
  const [incrementAmount ,setIncrementAmount] = useState(0)



     const count = useSelector(state => state.counter.count)
     console.log(count)
       const dispatch = useDispatch()
  
     

    
  
     const resetHandler=()=>{
        setIncrementAmount(0)
        dispatch(reset())
    }
     const addValue = Number(incrementAmount) || 0
     console.log(addValue)

const incrementByAmount  =()=>{
    dispatch(increaseByAmount(addValue))
}
 

  
    return (
        
        <section>
            <p>{count}</p>
            <div>
                <button onClick={()=> dispatch(increment())}>+</button>
                <button onClick={()=> dispatch(decrement())}>-</button>
                <button onClick={resetHandler}>Reset</button>
              
            </div>
            <input 
             type='text'
             value={incrementAmount}
             onChange={(e)=> setIncrementAmount(e.target.value)}
            />
            <button onClick={incrementByAmount}>Increase By Amount</button>
        </section>
        )
}

export default Counter
