import React, {FC} from 'react';
import './MyButton.scss';

interface myButtonProps {
    onClick: (props: any) => void
    props?: any,
    classnameBtn?: string,
    children: string
}

const MyButton: FC<myButtonProps> = ({onClick, props, children, classnameBtn}) => {
    return (
        <button {...props} className={`myButton ${classnameBtn}`}
                onClick={onClick}>{children}
        </button>
    );
};

export default MyButton;