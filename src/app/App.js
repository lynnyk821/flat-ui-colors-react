import {PaletteHeader} from "../components/PaletteHeader";
import {Footer} from "../components/Footer";

export default function App() {
    const PageContainer = ({children}) => {
        return (
            <div className="w-full">{children}</div>
        );
    }
    return (
        <PageContainer>
            <div className="flex justify-center palette-bg">
                <PaletteHeader></PaletteHeader>
            </div>
        </PageContainer>
    );
}