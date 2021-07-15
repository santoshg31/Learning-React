import './main-page.css';
import Header from './header';
import FeaturedHouse from './featured-house';
import HouseFilter from './house-filter';
import SearchResults from '../search-results';
import { useEffect, useState, useMemo } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HouseFromQuery from '../house/house-from-query';

function App() {
  const [allHouses, setAllHouses] = useState([]);  //useState is used to access the value of houses below , also note the new type of destructuring where allHouses is the value that setAllHouses function will return.

  useEffect(() => {
    const fetchHouses = async () => {
      const rsp = await fetch("/houses.json");
      const houses = await rsp.json();
      setAllHouses(houses);
    };
    fetchHouses();
  }, []);  // blank array ("[]") ensures that the houses are loaded only once even if the component is re-rendered again if props values changes

  const featuredHouse = useMemo(() => {   //useMemo is kind of caching used here so that when the component is re - rendered it will show the same featured house from the cache on the main-page.
    if (allHouses.length) {
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }
  }, [allHouses]);

  return (
    <Router>
      <div className="container">
        <Header subtitle="Providing houses all over the world" />
        <HouseFilter allHouses={allHouses}></HouseFilter>
        <Switch>
          <Route path="/searchresults/:country">
            <SearchResults allHouses={allHouses} />
          </Route>
          <Route path="/house/:id">
            <HouseFromQuery allHouses={allHouses} />
          </Route>
          <Route path="/">
            <FeaturedHouse house={featuredHouse}></FeaturedHouse>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
