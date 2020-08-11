import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import dayjs from 'dayjs';
import DeleteIdea from './DeleteIdea';
import axios from 'axios';

import { Card, CardContent, Typography, Button, CardActions } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
        border: '1px solid lightgray',
        margin: '2px'
    },
    content: {
        display: 'flex',
        justifyContent: 'center'
    },
    title: {
        textTransform: 'capitalize'
    },
    category: {
        fontWeight: 'bold',
        color: 'B2C4CF'
    },
    button: {
        float: 'left'
    },
    deleteBtn: {
        color: 'orange',
        left: '75%'
    }
})

const Idea = ({ ideaId, num, shortDescription, longDescription, rate, expetacions, category, createdAt, showDetail, modal }) => {

    const openModal = (ideaId) => {
        modal(true)
        axios.get(`/ideas/${ideaId}`)
            .then(res => {
                console.log(res.data)
                showDetail(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <div>
                    <span style={{ color: 'darkgreen', fontWeight: 'bold' }}>Date of created idea:</span> {dayjs(createdAt).format('YYYY-MM-DD')}
                    <small style={{ float: 'right' }}>
                        <span style={{ color: '#3e32a8', fontWeight: 'bold' }}>Raiting:</span> {rate}
                    </small>
                </div>
                <hr />
                <div>
                    <Typography variant="h5" component="h3" className={classes.title}>
                        {shortDescription}
                    </Typography>

                    <Typography variant="subtitle2" gutterBottom >
                        Category:<span className={classes.category}>{category}</span>
                    </Typography>
                    <Typography variant="body2" component="p">{expetacions}</Typography>
                </div>
            </CardContent>
            <CardActions>
                <Button onClick={() => openModal(ideaId)} size="small" variant="outlined" className={classes.button}>Learn More</Button>
                <DeleteIdea id={ideaId} />
            </CardActions>
        </Card>
    )
}
export default Idea;