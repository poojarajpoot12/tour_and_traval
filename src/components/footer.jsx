import { useNavigate } from 'react-router-dom';
import '../css/footer.css';

const Footer=()=>{
    const navigate=useNavigate();
    return(
        <>
        <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h5>About Us</h5>
                    <p>We are dedicated to providing the best travel experiences and packages.</p>
                </div>
                <div className="col-md-4">
                    <h5>Quick Links</h5>
                    <ul className="list-unstyled">
                        <li><a onClick={()=>{navigate('/')}}>Home</a></li>
                        <li><a onClick={()=>{navigate('/desination')}}>Destinations</a></li>
                        <li><a onClick={()=>{navigate('/package')}}>Packages</a></li>
                        <li><a onClick={()=>{navigate('/blog')}}>Blog</a></li>
                        <li><a onClick={()=>{navigate('/contact')}}>Contact</a></li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h5>Contact Us</h5>
                    <p>Email: info@travelexplorer.com</p>
                    <p>Phone: +1 234 567 890</p>
                    <div className="social-icons">
                        <a href="#" className="fab fa-facebook-f"></a>
                        <a href="#" className="fab fa-twitter"></a>
                        <a href="#" className="fab fa-instagram"></a>
                        <a href="#" className="fab fa-linkedin-in"></a>
                    </div>
                </div>
            </div>
            <div className="text-center mt-4">
                <p>&copy; 2023 TravelExplorer. All rights reserved.</p>
            </div>
        </div>
    </footer>
        </>
    )
}
export default Footer