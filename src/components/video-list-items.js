import React, { Component } from 'react';
import { Card, Row, Col } from 'react-bootstrap';

class VideoListItems extends Component {


    render() {
        const { videoIndividual } = this.props;
        const { snippet } = videoIndividual;

        return (

            <div
                onClick={() => {
                    console.log("CLICKED VIDEO:", videoIndividual);
                    this.props.onVideoSelectStageOne(videoIndividual);
                }}
            >
                    <Row className=" g-1 mb-2 rounded bg-white bg-opacity-75 p-2 " style={{ cursor: 'pointer' }}>
                        <Col xs={5}>
                            <div className="ratio ratio-16x9">
                              <img className='rounded-4'  src={snippet.thumbnails.high.url} alt="thumb" />
                            </div>
                        </Col>

                        <Col xs={7}>
                            <Card.Body className="p-2 pt-0  h-100 w-100 ">
                                <h6 className= " fw-bolder mb-4 fs-5 "  style={{ fontSize: '0.9rem', lineHeight: '1.2' }}>
                                    {snippet.title}
                                </h6>
                                <div className="text-muted fw-bold " style={{ fontSize: '0.8rem' }}>
                                    <div>{snippet.channelTitle}</div>
                                </div>
                            </Card.Body>
                        </Col>
                    </Row>  
            </div>

        );

    }
}

export default VideoListItems;