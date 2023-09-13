import {PropsWithChildren, FC} from 'react';

interface IProps extends PropsWithChildren {

}

const Search: FC<IProps> = () => {
    
    return (
        <div>
            Search
        </div>
    );
};

export {Search};