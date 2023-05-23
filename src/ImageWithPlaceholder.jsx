import React, { useState } from 'react';
import { Image } from '@chakra-ui/react';
import placeholder from './assets/placeholder_square.png';

function ImageWithPlaceholder({ src, ...props }) {
  const [imageSrc, setImageSrc] = useState(placeholder);

  function handleLoad() {
    if (imageSrc !== src) {
      setImageSrc(src);
    }
  }

  return <Image src={imageSrc} {...props} onLoad={handleLoad} />;
}

export default ImageWithPlaceholder;
