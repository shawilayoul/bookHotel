export const getHotel = async () => {
  const response = await fetch("http://localhost:8000/api/hotel/hotels");
  const data = await response.json();
  return data;
};
