import React, { useState, Fragment, useEffect } from 'react';

import AddIcon from '@material-ui/icons/Add';

import axios from 'axios';
import MyButton from '../utils/MyButton';
import { Dialog, TextField, Button } from '@material-ui/core';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';


import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    textField: {
        margin: '10px auto 10px auto'
    },
    closeButton: {
        position: 'absolute',
        left: '90%',
    },
    submitButton: {
        position: 'relative',
        left: '75%'
    },
})

const AddCategory = () => {
    const [category, setCategory] = useState({
        categoryName: ''
    });
    const [dialog, setDialog] = useState(false);

    const classes = useStyles();

    const addCategory = (category) => {
        axios.post('/newCategory', category)
            .then(res => {
                console.log(res.data);
                setCategory(res.data);
                window.location.reload();
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setCategory({ [name]: value })
    }

    const handleOpen = () => {
        setDialog(true);
    }
    const handleClose = () => {
        setDialog(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCategory = {
            categoryName: category.categoryName
        }
        addCategory(newCategory);
        handleClose();
    }

    return (
        <Fragment>
            <MyButton tip="add new category" onClick={handleOpen}>
                <AddIcon style={{ color: 'black' }} />
            </MyButton>
            <Dialog
                open={dialog}
                onClose={handleClose}
                fullWidth
                maxWidth="sm"
            >
                <MyButton tip="close" onClick={handleClose} btnClassName={classes.closeButton}>
                    <CloseIcon />
                </MyButton>

                <DialogTitle>Add new category</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            name="categoryName"
                            type="text"
                            label="Name of category"
                            placeholder="Name of category"
                            value={category.categoryName || ''}
                            onChange={handleChange}
                            className={classes.textField}
                            fullWidth />
                        <Button
                            type="submit"
                            variant="contained"
                            color="inherit"
                            className={classes.submitButton}
                        >Add category</Button>
                    </form>
                </DialogContent>
            </Dialog>
        </Fragment>
    )

}

export default AddCategory;