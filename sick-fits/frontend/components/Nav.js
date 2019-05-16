import React from 'react';
import Link from 'next/link';
import NavStyles from './styles/NavStyles';

function Nav() {
    return (
        <NavStyles>
            <Link href="/sell">
                <a>Sell</a>
            </Link>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/items">
                <a>Shop</a>
            </Link>
            <Link href="/sell">
                <a>Sell</a>
            </Link>
            <Link href="/signup">
                <a>Signup</a>
            </Link>
            <Link href="/order">
                <a>Order</a>
            </Link>
            <Link href="/me">
                <a>Me</a>
            </Link>
        </NavStyles>
    );
}

export default Nav;
