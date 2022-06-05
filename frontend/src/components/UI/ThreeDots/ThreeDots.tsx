import React, {FC} from 'react';
import './ThreeDots.scss';
interface ThreeDotsProps{
    onClick?:()=>void
}
const ThreeDots:FC<ThreeDotsProps> = () => {
    return (
        <div className='sevenDays__threeDots'><span className='sevenDays__dot'></span></div>
    );
};

export default ThreeDots;