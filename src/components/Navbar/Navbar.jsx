import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'


import useStyles from './styles'

const Navbar = () => {
    const classes = useStyles()
    return (
        <>
            <AppBar positon='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography variant='h6' className={classes.title} color='inherit'>
                        <img src={'https://cdn.pixabay.com/photo/2019/02/19/19/45/thumbs-up-4007573_960_720.png'} alt='Commerce.js, jEn-Commerce' height='25px' className={classes.image}/>
                        Commerce.js (jEn-Commerce)
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <iconButton aria-label='Show cart items' color='inherit'>
                            <Badge badgeContent={2} color='secondary'>
                                <ShoppingCart/>
                            </Badge>
                        </iconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
