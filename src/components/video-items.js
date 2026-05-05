import React, { Component } from 'react';
import VideoListItems from './video-list-items';

class VideoItems extends Component {

    render() {
        const { video } = this.props;

        return (
            <div className='Col-12 Col-lg-4'>
                <div>
                    {video.map(videoIndividual => {
                        return (<VideoListItems
                            key={videoIndividual.id.videoId}
                            videoIndividual={videoIndividual}
                            onVideoSelectStageOne={this.props.onVideoSelect}
                        />
                                )
                            }
                        )
                    }

                </div>
            </div>
        );
    }
}

export default VideoItems;