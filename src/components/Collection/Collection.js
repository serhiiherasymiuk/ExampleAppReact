import './Collection.css';

export function Collection({ images }) {
   const renderImages = () => {
    return images.map((image, index) => (
      <div className='img-container' key={index}>
        <img src={image.src} alt='' />
        <div className='img-description'>
          <p>{image.title} {image.year}</p>
          <p>{image.author}</p>
          <p>{image.description}</p>
        </div>
      </div>
    ));
  };  

  return (
    <div className="Collection">
        {renderImages()}
    </div>
  );
}