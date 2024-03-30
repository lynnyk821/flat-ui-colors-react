import {HomeHeader} from "./components/Header/HomeHeader";
import {HomeBody} from "./components/Body/HomeBody";
import {HomeFooter} from "./components/Footer/HomeFooter";


export const Home = () => {
    const HomeContainer = ({children}) => {
        return (
            <div className="w-full">{children}</div>
        );
    }
    return (
        <HomeContainer>
            <div className="flex flex-col justify-center items-center palette-bg">
                <HomeHeader></HomeHeader>
                <HomeBody></HomeBody>
            </div>
            <HomeFooter></HomeFooter>
        </HomeContainer>
    );
}
