
import { BrowserRouter as Router, Switch, Route , Link, NavLink} from "react-router-dom";
import Home from "./Components/pages/home";

import NavigationContainer from "./Components/navigationContainer"

export default function App() {
  return (
    <Router>
    <div className="App">
        <NavigationContainer/>
            <Switch>
                   <Route exact path ="/home" component={Home}/>
                  {/* <Route path="/about" component={About}/>
                  <Route path="/contact" component={Contact}/>
                  <Route path="/b/:slug" component={Descript}/>  */}
            </Switch>    
    </div>
    </Router>
  )
}
