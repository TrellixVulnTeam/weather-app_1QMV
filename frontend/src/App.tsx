import React from 'react';
import './App.scss';
import {useTypedSelector} from "./hooks/useTypedSelector";
import {useTheme} from "./hooks/useTheme";
import TodayForecast from "./pages/TodayForecast/TodayForecast";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import SevenDays from "./pages/SevenDays/SevenDays";

const App: React.FC = () => {
    const userCity:string|null = useTypedSelector(state=>state.user?.cities?state.user?.cities[0]:null);
    const defaultCity = useTypedSelector(state => state.weather.resolvedAdress);
    const city: string = userCity!==null?userCity:defaultCity;
    useTheme();
    const currentTheme: string = useTypedSelector(state => state.currentPage.bgColor);
    return (
        <BrowserRouter>
            <div className={currentTheme === 'gray' ? 'app gray' : 'app blue'}>
                <div className='app__wrapper'>
                    <Routes>
                        <Route
                            path="*"
                            element={<Navigate to={`/forecast/${city}`} replace/>}
                        />
                        <Route path="/forecast/:city" element={<TodayForecast/>}/>
                        <Route path="/7days/:city" element={<SevenDays/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
