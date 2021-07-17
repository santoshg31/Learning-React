import { useMemo } from "react";

const useFeaturedHouse = (allHouses) =>{
    const featuredHouse = useMemo(() => {   //useMemo is kind of caching used here so that when the component is re - rendered it will show the same featured house from the cache on the main-page.
        if (allHouses.length) {
          const randomIndex = Math.floor(Math.random() * allHouses.length);
          return allHouses[randomIndex];
        }
      }, [allHouses]);

return featuredHouse;
}

export default useFeaturedHouse;