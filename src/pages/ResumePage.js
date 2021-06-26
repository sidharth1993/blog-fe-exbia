import React from 'react';
import windowDimensions from 'react-window-dimensions';

const ResumePage = ({width,height}) => {
    const file = 'https://drive.google.com/file/d/1Ar5QVI4hV_LZEknwlfaCug0kDema-gwS/preview?usp=sharing'
    return(
        <div className="contents">
            <iframe title="resumeSSG" src={file} width={((80*width)/100)} height={((80*height)/100)}></iframe>
        </div>
    )
}

export default windowDimensions()(ResumePage);