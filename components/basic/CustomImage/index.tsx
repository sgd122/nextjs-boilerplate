import type { ImageProps } from 'next/image';
import Image from 'next/image';
import React from 'react';

interface Props {
  src: string;
  alt: string;
}

const CustomImage: React.FC<Props & Omit<ImageProps, 'src' | 'alt'>> = ({
  src,
  alt,
  ...config
}) => {
  return <Image src={src} alt={alt} placeholder="blur" {...config} />;
};

export default CustomImage;
