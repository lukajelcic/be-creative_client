import React, { useState, Fragment, useEffect } from 'react';

import AddIcon from '@material-ui/icons/Add';

import axios from 'axios';
import MyButton from '../utils/MyButton';
import { Dialog, TextField, Button } from '@material-ui/core';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
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
        left: '80%'
    },
})

const PostIdea = () => {
    const [idea, setIdea] = useState({
        num: '',
        shortDescription: '',
        longDescription: '',
        rate: null,
        expetacions: '',
    });
    const [categories, setCategories] = useState([]);
    const [dialog, setDialog] = useState(false);

    const classes = useStyles();

    useEffect(() => {
        fetchCategories();
    }, [])

    const fetchCategories = () => {
        axios.get('/categories')
            .then(res => {
                setCategories(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const postIdea = (idea) => {
        axios.post('/newIdea', idea)
            .then(res => {
                console.log(res.data);
                setIdea(res.data);
                window.location.reload();
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setIdea(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleOpen = () => {
        setDialog(true);
    }
    const handleClose = () => {
        setDialog(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newIdea = {
            num: idea.num,
            shortDescription: idea.shortDescription,
            longDescription: idea.longDescription,
            rate: idea.rate,
            expetacions: idea.expetacions,
            category: idea.category
        }
        postIdea(newIdea);
        handleClose();
    }

    return (
        <Fragment>

            <MyButton tip="post new idea" onClick={handleOpen}>
                <AddIcon style={{ color: 'white' }} />
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

                <DialogTitle>Post a new idea</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit}>

                        <TextField
                            id="num"
                            name="num"
                            type="text"
                            label="Number of idea"
                            placeholder="Number of idea"
                            value={idea.num || ''}
                            onChange={handleChange}
                            className={classes.textField}
                            fullWidth />

                        <Select
                            labelId="categories"
                            id="categories"
                            value={categories}
                            onChange={(e) => setCategories(e.target.value)}
                            input={<Input />}
                            fullWidth
                        >
                            <MenuItem key={Math.random(0, 100000)} value={categories.map(c => c.categoryId)}>
                                {categories.map(m => m.categoryId)}
                            </MenuItem>
                        </Select>

                        <TextField
                            id="shortDescription"
                            name="shortDescription"
                            type="text"
                            label="Short Description"
                            placeholder="Short Description"
                            value={idea.shortDescription || ''}
                            onChange={handleChange}
                            className={classes.textField}
                            fullWidth />

                        <TextField
                            id="longDescription"
                            name="longDescription"
                            type="text"
                            label="Long Description"
                            placeholder="Long Description"
                            value={idea.longDescription || ''}
                            onChange={handleChange}
                            className={classes.textField}
                            multiline={true}
                            rows={6}
                            fullWidth />

                        <TextField
                            id="rate"
                            name="rate"
                            type="text"
                            label="Raiting of idea"
                            placeholder="Raiting of idea"
                            value={idea.rate || ''}
                            onChange={handleChange}
                            className={classes.textField}
                            fullWidth />

                        <TextField
                            id="expetacions"
                            name="expetacions"
                            type="text"
                            label="Expetacions of idea"
                            placeholder="Expetacions of idea"
                            value={idea.expetacions || ''}
                            onChange={handleChange}
                            className={classes.textField}
                            multiline={true}
                            rows={4}
                            fullWidth />

                        <Button
                            type="submit"
                            variant="contained"
                            color="inherit"
                            className={classes.submitButton}>
                            Post Idea
                            </Button>
                    </form>
                </DialogContent>
            </Dialog>
        </Fragment>
    )

}

export default PostIdea;