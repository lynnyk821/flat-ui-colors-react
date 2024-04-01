import {HomeHeader} from "../components/Home/Header/HomeHeader";
import {HomeBody} from "../components/Home/Body/HomeBody";
import {HomeFooter} from "../components/Home/Footer/HomeFooter";
import {SideBar} from "../components/Sidebar/SideBar";

export const Home = () => {
    const HomeContainer = ({children}) => {
        return (
            <div className="w-full pl-12">{children}</div>
        );
    }
    return (
        <>
            <SideBar></SideBar>
            <HomeContainer>
                <div className="flex flex-col justify-center items-center palette-bg">
                    <HomeHeader></HomeHeader>
                    <HomeBody></HomeBody>
                </div>
                <HomeFooter></HomeFooter>
            </HomeContainer>
        </>
    );
}
