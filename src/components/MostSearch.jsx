import React from 'react'
import FakeData from './Shared/FakeData';
import CarItems from './CarItems';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"



const MostSearchCar = () => {
  console.log("new value",FakeData.carList )
 
  return (
    <div className='mx-24'>
      <h2 className='text-center font-bold text-3xl 
      my-16'>Most Searched Cars</h2>
      <Carousel>
      <CarouselContent>
        {FakeData.carList.map((car, index) => (
          <CarouselItem key={index} className="basis-1/4">
            <CarItems car={car}/>
          </CarouselItem>
        ))}
      
      
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      </Carousel>
    </div>
  )
}

export default MostSearchCar;
