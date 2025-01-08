
// import { storage } from 'config/firebaseConfig.js';
// import { ref } from 'firebase/storage';
// import { Button } from '@/components/ui/button';
import React, { useState } from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";


const UploadImage = () => {

  const [selectedFile, setSelectedFieList] = useState([])

  const onFileSelected = (event) => {
    const file= event.target.files;
    
    for(let i=0; i<file?.length; i++)
    {
      const files = file[i];
      setSelectedFieList((prev) => [...prev,files])
      
    }
  }
   
  const onImageRemove = (image , index) => {
    const result = selectedFile.filter((item) => item!=image);

    setSelectedFieList(result)
  }


  // const UploadImages = async(event) => {
  //   const file = event.target.files
  //     if(!file) return 
  //     const data = new FormData()
  //     data.append("file", file)
  //     data.append("upload_preset", "car-project-image")
  //     data.append("cloud_name", "dozbv9ouz")
  
  //   const res =  await fetch("https://api.cloudinary.com/v1_1/ozbv9ouz/image/upload", {
  //     method: "POST",
  //     body: data,
  //  } )
  
  //  const uploadedImageURL = await res.json()
  //  console.log(uploadedImageURL)
  //  setSelected
  
  // }


  return (
    <div className='cursor-pointer'>
      <h2 className='font-medium text-xl m-3'>Upload Car Images</h2>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 rounded-xl'>
        {selectedFile.map((image,index) => (
          <div key={index}>
            <IoCloseCircleOutline className='absolute text-red-600 m-2 h-5 w-5 '
            onClick={() => onImageRemove(image, index)}
            />
            <img src={URL.createObjectURL(image)} className='w-full h-[130px] object-cover' />
          </div>
        ))}
        <label htmlFor='upload-images'>
      <div className='border rounded-xl border-dotted border-blue-500 bg-blue-100 p-4'>
        <h2 className='text-lg text-center p-10 cursor-pointer hover:shadow-lg'>+</h2>
      </div>
        </label>
        <input type="file" multiple={true} onChange={onFileSelected} id='upload-images' className='opacity-0'/>
      </div>
     
    </div>
  )
}

export default UploadImage
