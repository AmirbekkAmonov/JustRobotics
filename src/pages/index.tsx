import Home from "./Home/home"
import AboutUs from "./Home/aboutUs"
import Courses from "./Home/courses"
import Contacts from "./Home/contacts"
import Coll from "./Home/call"
function index() {
  return (
    <main>
        <Home/>
        <AboutUs/>
        <Courses/>
        <Contacts/>
        <Coll/>
    </main>
  )
}

export default index