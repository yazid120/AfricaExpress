import React, {useState, useEffect} from "react";
import '../../../style/ImageMagnifier.css'


function ProductImagesMagnifier({imgArticleMainUri, ProductArticle, ProductArticleImages, imgArticleUri}){
  const [currentImage, setCurrentImage] = useState(null);
  const [magnifierStyle, setMagnifierStyle] = useState({ display: 'none' });

  useEffect(() => {
    if (ProductArticle?.image) {
      setCurrentImage(imgArticleMainUri + ProductArticle.image);
    }
  }, [ProductArticle]);

  const handleMouseEnter = (e) => {
    const img = e.currentTarget;
    const imgRect = img.getBoundingClientRect();
    const magnifierSize = 150; // Size of the magnifier lens
    const zoomLevel = 2; // Zoom level for backgroundSize

    setMagnifierStyle({
      backgroundImage: `url(${img.src})`,
      backgroundSize: `${imgRect.width * zoomLevel}px ${imgRect.height * zoomLevel}px`,
      display: 'block', // Show the magnifier on mouse enter
    });
  };

  const handleMouseMove = (e) => {
    const img = e.currentTarget;
    const imgRect = img.getBoundingClientRect();
    const magnifierSize = 150; // Size of the magnifier lens
    const zoomLevel = 2; // Zoom level for backgroundSize

    const x = e.clientX - imgRect.left;
    const y = e.clientY - imgRect.top;

    // Ensure the magnifier stays within image boundaries
    const magnifierLeft = Math.min(
      Math.max(magnifierSize / 2, x),
      imgRect.width - magnifierSize / 2
    );
    const magnifierTop = Math.min(
      Math.max(magnifierSize / 2, y),
      imgRect.height - magnifierSize / 2
    );

    setMagnifierStyle((prevStyle) => ({
      ...prevStyle,
      left: `${magnifierLeft}px`,
      top: `${magnifierTop}px`,
      backgroundPosition: `-${(magnifierLeft / imgRect.width) * (imgRect.width * zoomLevel - magnifierSize)}px -${(magnifierTop / imgRect.height) * (imgRect.height * zoomLevel - magnifierSize)}px`,
    }));
  };

  const handleMouseLeave = () => {
    setMagnifierStyle({
      ...magnifierStyle,
      display: 'none', // Hide the magnifier on mouse leave
    });
  };

  const handleChangeImage = (newImage) => {
    setCurrentImage(imgArticleUri + newImage);
  };

  return(
    <>
    <div className="image-container relative">
    <img
      src={currentImage}  // This will now correctly display the current image
      alt="product"
      className="w-full"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    />
    <div className="magnifier" style={magnifierStyle}></div>
    <div className="grid grid-cols-5 gap-4 mt-4">
      {ProductArticleImages.product_image?.map((article, key) => (
        <div key={key}>
          <img
            src={imgArticleUri + article.image_uri}  // Thumbnail image URI
            alt="product2"
            className="w-full h-full cursor-pointer border border-primary"
            onClick={() => handleChangeImage(article.image_uri)}  // Handle click to change main image
          />
        </div>
      ))}
    </div>
  </div>
    </>
  )
}
export default ProductImagesMagnifier
