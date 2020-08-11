import React, { Fragment, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MyButton from '../utils/MyButton';
import axios from 'axios';

import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteOutline from '@material-ui/icons/DeleteOutline';


const useStyles = makeStyles({
    deleteButton: {

    }
})
const DeleteIdea = ({ id }) => {
    const [ideas, setIdeas] = ([]);
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const deleteIdea = (ideaId) => {
        axios.delete(`/ideas/${ideaId}`)
            .then(res => {
                console.log(res)
                window.location.reload();
            })
            .catch(err => {
                console.log(err)
            })
        handleClose();
    }

    return (
        <Fragment>
            <MyButton tip='delete idea'
                onClick={handleOpen}
                btnClassName={classes.deleteButton}
            >
                <DeleteOutline color='secondary' />
            </MyButton>

            <Dialog open={open}
                onClose={handleClose}
                fullWidth
                maxWidth='sm'
            >
                <DialogTitle>
                    Are you sure you want to delete this idea?
                    </DialogTitle>

                <DialogActions>
                    <Button onClick={handleClose} color='primary'>Cancel</Button>
                    <Button onClick={() => deleteIdea(id)} color='secondary'>Delete</Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    )
}

export default DeleteIdea;

