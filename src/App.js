import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Banner from "./Components/Banner/Banner";

import Nav from "./Components/Nav/Nav";
import About from "./Pages/About/About";
import FAQ from "./Pages/FAQ/FAQ";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route exact component={Home}/>
        </Routes>
        <Home />
        <About />
        <Banner />
        <FAQ />
      </Router>
    </div>
  );
}

export default App;
