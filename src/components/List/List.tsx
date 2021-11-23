import React from 'react';

type listProps = {
    children: string | number
    label?: string
    class?: string
}

const List = (props: listProps) => {
    return <>
        <span>{props.label}</span>
        <li className={props.class}>{props.children}</li>
    </>
};

export default List;
