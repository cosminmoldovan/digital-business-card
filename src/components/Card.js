import Profile from './Profile'
import About from './About'
import Interests from './Interests'
import SocialMedia from './SocialMedia'
function Card(){
    return(
        <div className="card">
        <Profile />
        <About />
        <Interests />
        <SocialMedia />
        </div>
    );
   
}
export default Card;