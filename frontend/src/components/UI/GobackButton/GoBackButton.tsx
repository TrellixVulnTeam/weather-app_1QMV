import React, {FC} from 'react';
import './GoBackButton.scss';
interface GoBackButtonProps{
    onClick:()=>void;
}
const GoBackButton:FC<GoBackButtonProps> = ({onClick}) => {
    return (

        <div className='sevenDays__goBackButton' onClick={onClick}>
            <span className='sevenDays__goBack-circle'></span>
        </div>
    );
};

export default GoBackButton;