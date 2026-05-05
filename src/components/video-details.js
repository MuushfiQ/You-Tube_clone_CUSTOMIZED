import React, { Component } from 'react';

class VideoDetails extends Component {
  render() {
    const { VideoId, title, description } = this.props;
    const url = `https://www.youtube.com/embed/${VideoId}`;

    return (
      <div className='p-4' >

        <div className="ratio ratio-16x9 mb-4  shadow">
          <iframe
            src={url}
            title={title}
            allowFullScreen
          ></iframe>
        </div>

        <div className="mt-3 p-3 bg-white text-dark rounded-4 shadow-sm ">
          <h5 className="fw-bold fs-4 mb-2">{title}</h5>
          <p className="text-muted fw-medium fs-6 mb-0" style={{ fontSize: "0.9rem" }}>
            {description}
          </p>
        </div>

      </div>
    );
  }
}

export default VideoDetails;