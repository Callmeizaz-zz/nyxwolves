import { Switch, Route } from "react-router-dom";
import FacultyLogin from "./components/form/facultyLogin";
import StudentComp from "./components/student.home";
import Register from "./components/form/register";
import StudentLogin from "./components/form/StudentLogin";
import Home from "./pages/home";
import GlobalStyle from "./styles/globalStyles";
import Profile from "./components/form/profile";
import UpdateProfile from "./components/form/updateProfile";
import Faculty from "./pages/faculty";
import CourseComp from "./components/form/course";

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/register/">
          <Register />
        </Route>
        <Route path="/login/student" exact>
          <StudentLogin />
        </Route>
        <Route path="/student/:id" exact>
          <StudentComp />
        </Route>
        <Route path="/student/profile/:id" exact>
          <Profile />
        </Route>
        <Route path="/profile/update/:id" exact>
          <UpdateProfile />
        </Route>
        <Route path="/login/faculty" exact>
          <FacultyLogin />
        </Route>
        <Route path="/faculty/:id" exact>
          <Faculty />
        </Route>
        <Route path="/faculty/course/:id" exact>
          <CourseComp />
        </Route>
      </Switch>
    </>
  );
}

export default App;
