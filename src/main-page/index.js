import './main-page.css';
import Header from './header';
import FeaturedHouse from './featured-house';
import HouseFilter from './house-filter';
import SearchResults from '../search-results';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HouseFromQuery from '../house/house-from-query';
import useHouses from '../hooks/useHouses';
import useFeaturedHouse from '../hooks/useFeaturedHouse';
import HouseContext from '../context/houseContext';

function App() {
  const allHouses = useHouses();
  const featuredHouse = useFeaturedHouse(allHouses);

  return (
    <Router>
      <HouseContext.Provider value={allHouses}>
        <div className="container">
          <Header subtitle="Providing houses all over the world" />
          <HouseFilter/>
          <Switch>
            <Route path="/searchresults/:country">
              <SearchResults />
            </Route>
            <Route path="/house/:id">
              <HouseFromQuery />
            </Route>
            <Route path="/">
              <FeaturedHouse house={featuredHouse}></FeaturedHouse>
            </Route>
          </Switch>
        </div>
      </HouseContext.Provider>      
    </Router>
    
  );
}

export default App;
