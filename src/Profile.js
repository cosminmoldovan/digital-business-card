import CTA from './CTA'
import profileImg from './images/profile-img.png'
function Profile(){
    return(
        <div className="profile">
            <div className="profile-img">
                <img src={profileImg} alt="profile-img" />
            </div>
            <p className="profile-name">Laura Smith</p>
            <p className="profile-occupation">Frontend Developer</p>
            <CTA />
        </div>
    );
}
export default Profile;