import { Route, Routes } from "react-router-dom"
import App from "../App"
import NavBar from "./NavBar"
import Search from "../Components/Search"
import Top from "../Components/Top"
import Genres from "../Components/Genres"
import Genre from "../Components/Genre"
import Error from "../Components/Error"
import Footer from "../Components/Footer"
import Episode from "../Components/Episode"
import Info from "../Components/Info"

const Router = () => {
    return (
        <>
            <NavBar/>
            <hr className="break"></hr>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/results/:search" element={<Search/>}/>
                <Route path="/top" element={<Top/>}/>
                <Route path="/genres" element={<Genres/>}/>
                <Route path="/genres/:genre" element={<Genre/>}/>
                <Route path="/watch/:episodeId" element={<Episode/>}/>
                <Route path="/info/:id" element={<Info/>}/>               
                <Route path="*" element={<Error></Error>}/>
            </Routes>
            <Footer/>
        </>
    )
}

export default Router