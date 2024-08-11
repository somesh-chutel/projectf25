import { Route,Routes } from "react-router-dom";
import Home from "./components/home";
import Jobs from "./components/jobs";
import Login from "./components/login";
import NotFound from "./components/notFound";
import ProtectedRoute from "./components/protectedRoute";
import jobsDetailedSection from "./components/jobsDetailedSection";


const App = () => {
 

  return (


            <Routes>

              <Route path = "/"   element = {<ProtectedRoute Component = {Home}/>}></Route>

              <Route path = "/login"   element = {<Login/>}></Route>

              <Route path = "/jobs"   element = {<ProtectedRoute Component = {Jobs}/>}></Route>

              <Route path = "/jobs/:id"   element = {<ProtectedRoute Component = {jobsDetailedSection}/>}></Route>

              <Route path = "/*"   element = {<NotFound/>}></Route>

            </Routes>



  );
};

export default App;
