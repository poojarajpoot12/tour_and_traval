import Footer from "../components/footer";
import Nav from "../components/nav";
import NorthIndiaPackages from "../components/northindiapackage";
import PilgrimPackage from "../components/pilgrimpackage";

const Packages =()=>{
    return(
        <>
        {<Nav/>}
        {<NorthIndiaPackages/>}
        {<PilgrimPackage/>}
        {<Footer/>}
        </>
    )
}
export default Packages;