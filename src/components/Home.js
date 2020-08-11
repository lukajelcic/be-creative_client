import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid'
import axios from 'axios';
import { Modal } from 'antd';

import Idea from './Idea';
import IdeaDetail from './IdeaDetail';
import Categories from './Categories';

const Home = () => {
    const [ideas, setIdeas] = useState([]);
    const [detail, setDetail] = useState(false);
    const [modal, setModal] = useState(false);

    const fetchIdeas = () => {
        axios.get('/ideas')
            .then(res => {
                setIdeas(res.data)
                // console.log(res.data)
                return res.data
            })
            .catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        fetchIdeas();
    }, [])

    return (
        <Grid container>
            <Grid item xs={3}><Categories /></Grid>
            <Grid item xs={6}>
                {ideas.map((result) => (
                    < Idea
                        key={result.ideaId}
                        showDetail={setDetail}
                        modal={setModal}
                        {...result}
                    />
                ))}
                <Modal
                    title='Detail'
                    centered
                    visible={modal}
                    onCancel={() => setModal(false)}
                    footer={null}
                    width={800}
                >
                    <IdeaDetail
                        {...detail}
                    />
                </Modal>
            </Grid>
            <Grid item xs={3}>material</Grid>
        </Grid>
    )
}
export default Home;