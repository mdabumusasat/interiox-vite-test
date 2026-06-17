import { useEffect, useState } from "react";
import BackToTop from "../components/BackToTop";
// Import all footer components
import Footer from "../components/Footers/Footer";
// Import all header components
import Header from "../components/Headers/Header";
import Header2 from "../components/Headers/Header2";

const Layout = ({ children, HeaderStyle, FooterStyle, styleMode }) => {
    const [searchToggle, setSearchToggled] = useState(false);
    const [scroll, setScroll] = useState(0);
    const handleToggle = () => setSearchToggled(!searchToggle);
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        });
    }, [scroll]);

    const handleOpen = () => {
        document.body.classList.add("mobile-menu-visible");
    };
    const handleRemove = () => {
        document.body.classList.remove("mobile-menu-visible");
    };


    // **Header Selection**
    const renderHeader = () => {
        switch (HeaderStyle) {
            default: return <Header handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />;
            case "two": return <Header2 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />;
        }
    };

    // **Footer Selection**
    const renderFooter = () => {
        switch (FooterStyle) {
            default: return <Footer />;
        }
    };

    return (
        <>
            {renderHeader()}
            {children}
            {renderFooter()}
            <BackToTop />
        </>
    );
};

export default Layout;
