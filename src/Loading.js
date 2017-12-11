
import React from 'react';


const Loadings = ({ isFetching, things}) => {
    if (isFetching && things.size() == 0) return <Loading/>;

    return (
        <ul>
            ...
        </ul>
    );
}
export default Loadings;