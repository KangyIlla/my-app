import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.css'

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active> About Us </NavigationItem>
        <NavigationItem link="/" > The Menu </NavigationItem>
    </ul>
);

export default navigationItems;