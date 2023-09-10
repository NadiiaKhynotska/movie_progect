import {PropsWithChildren, FC} from 'react';

interface IProps extends PropsWithChildren {

}

const Header: FC<IProps> = () => {
    
    return (
        <div>
            Header
        </div>
    );
};

export {Header};