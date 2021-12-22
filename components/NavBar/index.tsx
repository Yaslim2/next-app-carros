interface NavBarProps {}
import { Header, Nav, Ul, LogoArea, ActionsArea, LocationArea } from "./styles";
import Logo from "@components/Logo";
import LocationBar from "@components/LocationBar";
import ButtonHeader from "@components/ButtonHeader";

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <Header>
      <Nav>
        <Ul>
          <LogoArea>
            <Logo />
          </LogoArea>
          <LocationArea>
            <LocationBar />
          </LocationArea>
          <ActionsArea>
            <ButtonHeader>Sign Up</ButtonHeader>
            <ButtonHeader border>Sign In</ButtonHeader>
          </ActionsArea>
        </Ul>
      </Nav>
    </Header>
  );
};

export default NavBar;
