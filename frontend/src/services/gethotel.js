import axios from "axios";
import { da } from "date-fns/locale";
export const getHotel = async () => {
  const response = await fetch("http://localhost:8000/api/hotel/hotels");
  const data = await response.json();
  console.log(data);
};
getHotel();
