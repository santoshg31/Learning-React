import { useEffect, useState } from "react";

const useHouses = ()=>{   //note the naming convention prefixed with "use"
    const [allHouses, setAllHouses] = useState([]);  //useState is used to access the value of houses below , also note the new type of destructuring where allHouses is the value that setAllHouses function will return.

    useEffect(() => {
      const fetchHouses = async () => {
        const rsp = await fetch("/houses.json");
        const houses = await rsp.json();
        setAllHouses(houses);
      };
      fetchHouses();
    }, []);  // blank array ("[]") ensures that the houses are loaded only once even if the component is re-rendered again if props values changes

    return allHouses;
  
}

export default useHouses;

