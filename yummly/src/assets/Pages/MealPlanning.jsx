import React from 'react'
import MealList from '../Components/MealList'
import { useDispatch} from 'react-redux'
import { mealplan } from '../Redux/Slice/MealPlan'

const MealPlanning = () => {

  const dispatch = useDispatch()
  

  const dayhandle=()=>{
    dispatch(mealplan("day"))
  }


 
  return (
    
    <div className='lg:w-3/4 lxl:w-4/5 lg:ml-auto lg:-mt-10 lxl:ml-auto'>
      <div className='mt-10 flex items-center flex-col'>

        <h2 className='text-xl font-bold'>Meal Planning</h2>
        
      <section className='controls mt-8 mb-4 flex items-center flex-col'>


      </section>


<button onClick={dayhandle}> day </button>

<MealList/>
      </div>
    </div>
  )
}

export default MealPlanning
