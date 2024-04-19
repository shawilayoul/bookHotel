import "./features.css";
import city1 from "../../assets/city1.jpg";
import city2 from "../../assets/city2.jpg";
import city3 from "../../assets/city3.jpg";
import { useQuery } from "@tanstack/react-query";
import { getHotel } from "../../services/gethotel";

const Features = () => {
  const query = useQuery({ queryKey: ["todos"], queryFn: getHotel });
  console.log(query.data);
  return (
    <div className="featureContainer">
      {query.data?.map(({ id, name, desc, city }) => (
        <div className="fcity" key={id}>
          <div className="FcityImag">
            <img src={city1} alt="" />
          </div>
          <div className="cityTitle">
            <h1> {name}</h1>
            <span>150 Properties</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
