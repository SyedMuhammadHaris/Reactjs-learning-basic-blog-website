import NavBar from "./components/navbar";
import Home from "./components/Home";
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Create from "./components/create";
import BlogDetails from "./components/Blog-details/index";
import NotFound from "./components/NotFound";


function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <div className="content">
         <Switch>
           <Route path="/" exact>
             <Home />
           </Route>
           <Route path="/create" exact>
             <Create />
           </Route>
           <Route path="/blogs/:id" exact>
             <BlogDetails  />
           </Route>
           <Route path="*">
             <NotFound  />
           </Route>
         </Switch>
         
      </div>
    </div>
    </Router>
  );
}

export default App;
