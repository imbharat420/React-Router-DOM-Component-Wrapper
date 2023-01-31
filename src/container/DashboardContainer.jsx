import { Routes,Route } from 'react-router-dom';
import Dashboard from '../screens/Dashboard';
import DashboardAbout from '../screens/DashboardAbout';

function DashboardContainer(){
    return (
        <div className="website-container">
            <div className="website-container__header">
                <h1 className="website-container__header__title">Dashboard</h1>
            </div>
            <div className="website-container__content">
                <Routes>
                    <Route path="/about" element={<DashboardAbout />} />
                    <Route exact path="/" element={<Dashboard/>} />
                </Routes>
            </div>
        </div>
    );
}

export default DashboardContainer;