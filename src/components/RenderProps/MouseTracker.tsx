import React from 'react';
import Tracker from './Tracker/Tracker';
import Image from './Image/Image';

export const MouseTracker = () => <>
    <Tracker>{t => (<Image tracker={t}/>)}</Tracker>
</>;
