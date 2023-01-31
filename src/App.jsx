import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import WebsiteContainer from './container/WebsiteContainer';
import DashboardContainer from './container/DashboardContainer';

function App() {
  return (
      <Router>
      <Routes>
        
          <Route  path="/dashboard"  element={<DashboardContainer />} >
            <Route exact path="/dashboard"  />
            <Route path="/dashboard/about"  />
          </Route>


         <Route exact path="/" element={<WebsiteContainer />} >
            <Route path="/" />
            <Route path="/about" />
         </Route>
      </Routes>
    </Router>
  );
} 

export default App;
