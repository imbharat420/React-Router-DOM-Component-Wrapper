import { Routes,Route } from 'react-router-dom';
import About from '../screens/About';
import Home from '../screens/Home';

function WebsiteContainer({children}){
    return (
        <div className="website-container">
            <div className="website-container__header">
                <h1 className="website-container__header__title">Website</h1>
            </div>
            <div className="website-container__content">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<About/>} />
                </Routes>
            </div>
        </div>
    );
}

export default WebsiteContainer;