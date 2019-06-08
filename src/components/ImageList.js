import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = props => {
  const images = props.images.map(({ id, urls, description }) => {
    return (
      <ImageCard
        key={id}
        src={urls.regular}
        alt={description}
      />
    );
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
