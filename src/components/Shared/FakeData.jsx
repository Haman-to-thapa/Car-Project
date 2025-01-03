import { faker } from "@faker-js/faker/locale/af_ZA"

const createRandomeCarList = () => {
  
  return {
    name: faker.vehicle.vehicle(),
    fuelType: faker.vehicle.fuel(),
    model: faker.vehicle.model(),
    type: faker.vehicle.type(),
    image: "https://cdni.autocarindia.com/Utils/ImageResizerV2.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/BMW-5-Series-080720241503.jpg&w=697&h=460&q=75&c=1",
    miles:1000,
    gearType: "Automatic",
    price: faker.finance.amount({min:4000, max:20000})
  }
}

const carList = faker.helpers.multiple(createRandomeCarList,{
  count:7
})

export default{
  carList,
}