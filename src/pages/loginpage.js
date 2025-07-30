import Footer from "../components/footer";
import Login from "../components/login";
import Nav from "../components/nav";

const LoginPage=()=>{
    return(
        <>
        {<Nav/>}
        {<Login/>}
        {<Footer/>}
        </>
    )
}
export default LoginPage;