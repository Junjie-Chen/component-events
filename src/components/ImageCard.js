import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load');
  }

  render() {
    const { urls, description } = this.props.image;

    return (
      <div>
        <img
          src={urls.regular}
          alt={description}
          ref={this.imageRef}
        />
      </div>
    );
  }
}

export default ImageCard;
