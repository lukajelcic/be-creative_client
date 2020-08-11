import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import PostIdea from './PostIdea';

const Navbar = () => {
    return (
        <div>
            <AppBar position='static' style={{ background: '#303030	', justifyContent: 'center' }}>
                <Toolbar style={{ margin: 'auto' }}>
                    <Typography variant="h6" style={{ color: 'lightgreen', textTransform: 'uppercase', fontWeight: 'bold', marginLeft: '50px' }}>
                        Be Creative
                </Typography>
                    <PostIdea />
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;