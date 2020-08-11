import React from 'react';
import dayjs from 'dayjs';
import { Row, Col, Tag, Typography } from 'antd';
import 'antd/dist/antd.css';
const TextTitle = Typography.Title;


const IdeaDetail = ({ ideaId, num, shortDescription, longDescription, rate, expetacions, createdAt, category }) => {
    return (
        <>
            <Row>
                <Col span={12}>
                    <Row>
                        <Col span={21}>
                            <TextTitle level={4}>{shortDescription}</TextTitle>
                            <TextTitle level={4}><span style={{ color: 'orange' }}>{num}</span></TextTitle>
                            <TextTitle level={2}><span style={{ color: 'orange' }}>{category}</span></TextTitle>

                        </Col>
                    </Row>
                    <Row style={{ marginBottom: '20px' }}>
                        <Col>
                            <Tag>{rate}.00</Tag>
                            <Tag>{dayjs(createdAt).format('YYYY-MM-DD')}</Tag>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'justify' }}>{longDescription}</Col>
                    </Row>
                </Col>
                <Col span={11}>
                    <TextTitle level={4} style={{ textAlign: 'justify' }}>What i expected of this idea:</TextTitle>
                    {expetacions}
                </Col>
            </Row>
        </>
    )
}
export default IdeaDetail;