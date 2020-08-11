import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import CategoryParentItem from './CategoryParentItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Typography } from '@material-ui/core';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import AddCategory from './AddCategory'

const useStyles = makeStyles({
    root: {
        height: 'auto',
        flexGrow: 1,
        maxWidth: 'auto',
        padding: '7px',
        margin: '3px'
    },
    title: {
        textTransform: 'uppercase',
        textAlign: 'center'
    }
});

const CategoriesList = () => {
    const [categories, setCategories] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        axios.get('/categories')
            .then(res => {
                const response = res.data;
                console.log(response)
                setCategories(response);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div className={classes.root}>
            <Typography variant="h5" component="h4" className={classes.title}>Categories</Typography>
            <AddCategory />
            <hr />
            <TreeView
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}>
                {categories.map(c => (
                    <div style={{ display: 'flex', padding: '3px' }} key={Math.random(0, 10000000)}>
                        <ArrowForwardIosOutlinedIcon /><CategoryParentItem {...c} />
                    </div>
                )
                )}
            </TreeView>
        </div >
    )
}
export default CategoriesList;