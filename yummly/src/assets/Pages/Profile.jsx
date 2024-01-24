import { Tabs } from 'antd'
import React from 'react'
import AddRecipe from './AddRecipe'

const Profile = () => {
  return (
    <>

      <div className='pt-10 h-screen relative lg:w-3/4 lxl:w-4/5 lg:ml-auto lg:-mt-10 lxl:ml-auto'>
        <Tabs defaultActiveKey='1'>
          <items tab="Add Recipe" key="1">
            <AddRecipe/>
          </items>
          <items tab="Settings" key="2">
            <h1> Settings </h1>
          </items>
          <items tab="profile" key="3">
            <h1> profile </h1>
          </items>
        </Tabs>
      </div>

    </>
  )
}

export default Profile
