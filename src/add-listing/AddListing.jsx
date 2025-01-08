import Header from '@/components/Header'
import React, { useState } from 'react'
import carDetails from "./../components/Shared/carDetails.json"
import InputField from './component/InputField'
import DropdownField from './component/DropdownField' 
import { Separator } from '@radix-ui/react-select'
import features from "./../components/Shared/feature.json"
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'

import { db } from './../../config'
import { CarListing } from './../../config/schema'
import TextAreaField from './component/TextAreaField'
import IconField from './component/IconField'
import UploadImage from './component/UploadImage'
import { useNavigate } from 'react-router-dom'

const AddListing = () => {

  const [formData, setFormData] = useState([])
  const [featureData , setFeaturesData] = useState([])
  const [loader , setLoader] = useState(false)
  const navigate = useNavigate();

  const handleInputChange = (name, value) => {
    setFormData((prevData) => (
      {...prevData,[name]:value

      }
    ))
    console.log(formData)
  }

  const handleFeatureChange = (name, value) => {
    setFeaturesData((prevData) => (
      {...prevData,[name]: value}
    ))
    console.log(featureData)
  }

  const onSubmit = async(e) => {
    setLoader(true)
    e.preventDefault()
    console.log(formData);

    try{
    const result = await db.insert(CarListing).values({
      ...formData, features:featureData
    });
      if(result) 
        {
        console.log("Data Saved")
        setLoader(false)
      }
     } catch(e){
        console.log("Error",e)
      }
    
  
  
  }



  return (
    <div>
      <Header/>
      <div className=' px-10 md:px-20 my-10'>
      <h2 className='text-4xl font-bold'>Add New Listing</h2>
      <form className="p-10 border rounded-xl mt-10">
        {/* car Details */}
      <div>
        <h2 className='font-medium text-xl mb-6'>Car Details</h2>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
          {carDetails.carDetails.map((item,index) => (
            <div key={index}>
             
              <label className='text-sm flex'>
              <IconField icon={item?.icon}/>
                {item?.label} {item.required && <span className='text-red-500'>*</span>}  
              </label>
                {item.fieldTyp=="text" || item.fieldType=="text" ? 
              <InputField item={item}  
              handleInputChange={handleInputChange}
              />  
              :
              item.fieldType == "dropdown"? <DropdownField 
              handleInputChange={handleInputChange}
              item={item}/> 
              :
              item.fieldType == "textarea" ? <TextAreaField item={item} handleInputChange={handleInputChange}/>
              : 
              null}
            </div>
          ))}
        </div>
        <div>

        </div>
      </div>
      <Separator className='my-6'/>
        {/* feature List */}
        <div>
          <h2 className='font-medium text-xl my-6'>Features</h2>
            <div className=' grid grid-cols-2 md:grid-cols-3 '>
            {features.features.map((item,index) => (
              <div key={index} className='flex gap-2 items-center'>
                <Checkbox onCheckedChange={(value) => handleFeatureChange(item.name,value) } />
                <h2>{item.label}</h2>  
              </div>
            ))}
            </div>
         
        </div>

        {/* Car Image */}
        <Separator className='my-6'/>
        <UploadImage setLoader={(v) =>{setLoader(v); navigate('/p')}} /> 
        <div className='flex justify-end mt-10'> 
          <Button type="submit"  onClick={(e) =>onSubmit(e)} >Submit</Button>
        </div>
      </form>
    
      </div>
    </div>
  )
}

export default AddListing
