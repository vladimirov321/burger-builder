import React from 'react';

import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem Link="/" active>Burger Builder</NavigationItem>
        <NavigationItem Link="/">Checkout</NavigationItem>
    </ul>
);

export default navigationItems;