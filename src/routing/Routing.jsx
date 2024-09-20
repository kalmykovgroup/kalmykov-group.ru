import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import MainLayout from "../layouts/main-layout/MainLayout.jsx";


const Routing = () => createBrowserRouter(
    createRoutesFromElements(
        <>
            {/*   <Darkening this={(ref) => this.Darkening = ref}/>

            <Route path="/" element={<MainLayout Darkening={() => this.Darkening()}/>}>

                <Route index element={<Main/>}/>
                <Route path="about" element={<About/>}/>
            </Route>*/}
            <Route path="/" element={<MainLayout/>}/>
        </>
    )
)

export default Routing