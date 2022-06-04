import React from 'react';
import Loader from "../../components/Loader/Loader";
import {useFetchSevenDays} from "../../hooks/useFetchSevenDays";

const SevenDays = () => {
    const [isLoading,city] = useFetchSevenDays();
    if (isLoading) {
        return <div className='app__LoaderWrapper'><Loader marginTop={200}/></div>
    }
    return (
        <div className='sevenDays'>
            <div className='sevenDays__wrapper'>
                <div className='sevenDays__header'>
                    <div className='sevenDays__goBackButton'></div>
                    <div className='sevenDays__cityName'></div>
                    <div className='sevenDays__threeDots'></div>
                </div>
                <div className='sevenDays__changeButton'></div>
            </div>
        </div>
    );
};

export default SevenDays;