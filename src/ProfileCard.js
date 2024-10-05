import './ProfileCard.css'
import facebook from './static/facebook.png'
import instagram from './static/instagram.png'
import linkedin from './static/linkedin.png'
import X from './static/reseaux-sociaux.png'
import whatsapp from './static/whatsapp.png'
import profile from './static/young-man-with-glasses-illustration_1308-174706.avif'
export default function ProfileCard()
{
    return(
        <div className="profile-card">
            <div className="profile-card-img">
                <img src={profile} alt="profile image" srcset="" />
            </div>
            <div className="profile-card-info">
                <h1>Amadou Diallo</h1>
                <p>adiallo7485@gmail.com</p>
                <div className="profile-card-rs">
                    <img src={facebook} alt="facebook" />
                    <img src={instagram} alt="instagram" />
                    <img src={linkedin} alt="linkedin" />
                    <img src={whatsapp} alt="whatsapp" />
                    <img src={X} alt="X" />
                </div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Donec commodo sit amet odio nec eleifend. Donec quis porttitor nibh. Aliquam id erat vitae leo aliquet porta. Nullam quis rhoncus nisl. Nulla facilisi. Phasellus eget enim viverra magna euismod fermentum. Integer ultrices convallis ullamcorper. Etiam ligula sapien, lacinia ac velit id, sollicitudin elementum neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas nibh nunc, lobortis vitae rutrum nec, pharetra quis lectus. Pellentesque efficitur, lorem eget venenatis convallis, magna erat imperdiet justo, non finibus neque nulla eu mauris. 
                Vestibulum gravida sit amet velit eget dictum.
                </p>
                <div className="profile-card-btn">
                    <input type="button" value="Follow"/>
                    <input type="button" value="Message" />
                </div>
            </div>
        </div>
    )
}