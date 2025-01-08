import React from 'react'

import { FaHeading } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaCarAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaTachometerAlt } from "react-icons/fa";
import { FaGasPump } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";
import { FaPalette } from "react-icons/fa";
import { FaBarcode } from "react-icons/fa";
import { FaRoad } from "react-icons/fa";
import { FaDoorOpen } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPenAlt } from "react-icons/fa";


const iconMap = {
  FaHeading : <FaHeading /> ,
  FaCheckCircle: <FaCheckCircle /> ,
  FaCar : <FaCar />,
  FaCarAlt : <FaCarAlt />,
  FaCalendarAlt :<FaCalendarAlt />,
  FaDollarSign : <FaDollarSign />,
  FaTachometerAlt : <FaTachometerAlt />,
  FaGasPump : <FaGasPump />,
  FaCogs : <FaCogs />,
  FaCarSide: <FaCarSide />,
  FaPalette : <FaPalette />,
  FaBarcode : <FaBarcode />,
  FaRoad : <FaRoad />,
  FaDoorOpen : <FaDoorOpen />,
  FaUserFriends : <FaUserFriends />,
  FaListUl : <FaListUl />,
  FaShieldAlt : <FaShieldAlt />,
  FaUser : <FaUser />,
  FaMapMarkerAl : <FaMapMarkerAlt />,
  FaPenAl : <FaPenAlt />



}

const IconField = ({icon}) => {
  return (
    <div className='text-blue-500 bg-blue-100'>{iconMap[icon]}</div>
  )
}

export default IconField