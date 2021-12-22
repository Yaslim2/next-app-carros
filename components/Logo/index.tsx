interface LogoProps {}
import { LogoContainer, ExoticText, CarsText } from "./styles";
const Logo: React.FC<LogoProps> = () => {
  return (
    <LogoContainer>
      <ExoticText>EXOTIC</ExoticText>
      <CarsText>CARS</CarsText>
    </LogoContainer>
  );
};

export default Logo;
