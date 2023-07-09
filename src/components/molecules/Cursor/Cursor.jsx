import React from 'react'
import { TriangleShape } from '../../atoms';
import { CursorWrapper } from '../../atoms';

const Cursor = ({value}) => {
    return ( 
        <CursorWrapper className="mb-2" leftPosition={value}>
            <span className="information-text">{value}% </span>               
            <TriangleShape/>
        </CursorWrapper>
    );
}
 
export default Cursor;