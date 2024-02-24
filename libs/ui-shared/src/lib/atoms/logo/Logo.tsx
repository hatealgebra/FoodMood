import { Image } from '@chakra-ui/react';
import fmLogo from '../../../assets/FoodMood_logo.svg';
interface LogoProps {
  as?: any;
  width?: string | string[];
}

const Logo = ({ as, width = '150px' }: LogoProps) => {
  return <Image as={as} width={width} src={fmLogo} alt="Food Mood logo" />;
};

export default Logo;
