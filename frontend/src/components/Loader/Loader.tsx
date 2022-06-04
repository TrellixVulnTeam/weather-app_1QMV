import React, {FC} from 'react';
import sunLoader from "../../assets/sunLoader.png";
import './Loader.scss';
 interface ILoaderProps{
    marginTop?:number
}
const Loader:FC <ILoaderProps> = ({marginTop}) => {
    return (
        <div className='loader_Wrapper' style={{marginTop:`${marginTop}px`}}>
            <img className='sunLoader' src={sunLoader} alt=""/>
        </div>
    );
};

export default Loader;