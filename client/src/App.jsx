import { Route, Routes } from "react-router-dom"
import Home from "./pages/homePage/Home"
function App() {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<h1>404 - გვერდი ვერ მოიძებნა</h1>} />
            </Routes>
        </div>
    )
}

export default App
