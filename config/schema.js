
import { pgTable, serial, varchar, json} from "drizzle-orm/pg-core";

export const CarListing = pgTable("carlisting",{
  id:serial("id").primaryKey(),
  listingTitle:varchar("listingTitle").notNull(),
  condition:varchar("condition").notNull(),
  make:varchar("make").notNull(),
  model:varchar("model").notNull(),
  year:varchar("year").notNull(),
  price:varchar("price").notNull(),
  mileage:varchar("mileage").notNull(),
  fuelType:varchar("fuelType").notNull(),
  transmission:varchar("transmission").notNull(),
  bodytype:varchar("bodyType"),
  color:varchar("color"),
  vin:varchar("vin").notNull(),
  drivetrain:varchar("drivetrain"),
  doors:varchar("doors"),
  seatingCapacity:varchar("seatingCapacity"),
  feature:varchar("feature"),
  warranty:varchar("warranty"),
  sellerType:varchar("sellerType").notNull(),
  location:varchar('location'),
  description:varchar("description"),
  features:json("features")
})