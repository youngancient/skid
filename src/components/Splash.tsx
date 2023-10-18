import { SplashScreenStyles } from "../styles/SplashScreen";
import { SkidLogoIcon } from "./Icons";


const SplashScreen = () => {
    return ( 
        <SplashScreenStyles>
            <div className="icon">
                <SkidLogoIcon />
                <img src="/assets/skid.svg" alt="skid logo text" className="" />
            </div>
        </SplashScreenStyles>
     );
}
 
export default SplashScreen;