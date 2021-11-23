import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Ul = styled.ul`
    height: 20px;
    float: right;

    a {
    color: #d0245a;
    padding: 10px 20px;
    text-decoration: none;
    }
    
    li {
    display: inline-block;
    list-style: none;
    
        &:last-child {
            margin-right: 25px;
        }
    }
`;

const Menu: React.FC = () => {
    return <Ul>
        <li>
            <Link href="/">
                <a>Home</a>
            </Link>
        </li>
        <li>
            <Link href="/components">
                <a>Components</a>
            </Link>
        </li>
        <li>
            <Link href="/playground">
                <a>Playground</a>
            </Link>
        </li>
        <li>
            <Link href="/antdesign">
                <a>Antdesign</a>
            </Link>
        </li>
    </Ul>
};

export default Menu;