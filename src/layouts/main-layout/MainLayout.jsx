import './MainLayoutRoute.css'
import Header from "./header/Header.jsx";
import Content from "./content/Content.jsx";
import Footer from "./footer/Footer.jsx";
import {Route} from "react-router-dom";


const MainLayout = ({ children }) => (
    <div>
        <Header/>
        <Content content={children}/>
        <Footer/>

    </div>
);

const MainLayoutRoute = ({component: Component, ...rest}) => {

    return (
        <Route {...rest} render={props => (
            <MainLayout>
                <Component {...props} />
            </MainLayout>
        )} />
    )

}

export default MainLayoutRoute


