import ExploreDestinations from "../components/ExploreDestinations"
import Footer from "../components/footer"
import Home from "../components/home"
import Nav from "../components/nav"


import PackageInterest from "../components/packageinterest"
import Slider from "../components/slider"


const Homepage =()=>{
    return(
        <>
       {<Nav/>}
        {<Home/>}
        {<ExploreDestinations/>}
        {<PackageInterest/>}
        {<Slider/>}
        {<Footer/>}
        </>
    )
}
export default Homepage