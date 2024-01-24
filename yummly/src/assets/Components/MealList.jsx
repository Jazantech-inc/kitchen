import React from 'react'
import Meal from './Meal'
const MealList = () => {
  const {data} = useSelector((state)=>state.plan)
    const nutrients =data.nutrients;

  return (
    <div className='main flex items-center flex-col '>
      <section className='nutrients mt-8 mb-4'>
        <h1 className='text-center mb-8'>Macros</h1>
        <ul className='flex w-[35rem] justify-evenly'>
            <li>Calories:{nutrients.calories.toFixed(0)}</li>
            <li>carbohydrates:{nutrients.carbohydrates.toFixed(0)}</li>
            <li>fat:{nutrients.fat.toFixed(0)}</li>
            <li>protein:{nutrients.protein.toFixed(0)}</li>
        </ul>
      </section>
      <section className="meals mt-8 mb-4 flex">
        {data.meals.map((meal)=>{
            return <Meal key={meal.id} meal={meal} />;
        })}
      </section>
    </div>
  )
}

export default MealList
