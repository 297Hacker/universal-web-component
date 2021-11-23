import React from "react";

type displayProps = {
    displayTrack: trackerType;
}

const Display: React.FC<displayProps> = (props) => {
    const {displayTrack} = props;
    return<>{displayTrack.x} | {displayTrack.y}</>
};

export default Display;