import { useParams } from "react-router-dom";
import House from "./";
import { useContext } from "react";
import HouseContext from "../context/houseContext";


const HouseFromQuery = () => {
    const allHouses = useContext(HouseContext);
    const { id } = useParams();
    const house = allHouses.find((h) => h.id === parseInt(id));
    if (!house) return <div>House not found.</div>;
    return <House house={house}></House>;;
}
 
export default HouseFromQuery;