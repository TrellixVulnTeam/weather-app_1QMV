import React, {FC} from 'react';
import './ChangeButton.scss';
interface ChangeButtonProps{
    onClick:()=>void
}

const ChangeButton:FC<ChangeButtonProps> = ({onClick}) => {
    return (
        <div className='app__changeBtn'>
            <button className='smallButton' onClick={onClick}>Change <span
                className='app__burger-menu'></span></button>
        </div>
    );
};

export default ChangeButton;