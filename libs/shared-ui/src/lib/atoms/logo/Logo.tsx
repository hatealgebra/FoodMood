import { Image } from '@chakra-ui/react';
import fmlogo from '../../assets/FoodMood_logo.svg';
import NextImage from 'next/image';

interface LogoProps {
  as?: typeof NextImage;
  width?: string | string[];
}

const Logo = ({ as, width = '150px' }: LogoProps) => {
  return <Image as={as} width={width} src={fmlogo} alt="Food Mood logo" />;
};

export default Logo;
