import React, {ReactNode} from 'react'
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

interface MainLayoutProps {
    children?: ReactNode
}

const MainLayout = ({children}: MainLayoutProps) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default MainLayout