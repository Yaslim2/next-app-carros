interface NavBarProps {}
import {
  Header,
  Nav,
  Ul,
  LogoArea,
  ActionsArea,
  LocationArea,
  Trash,
} from "./styles";
import Logo from "@components/Logo";
import LocationBar from "@components/LocationBar";
import ToggleButton from "@components/ToggleButton";
import ButtonHeader from "@components/ButtonHeader";
import { toggle } from "@store/slices/uiSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { RootState } from "@store/types";

const NavBar: React.FC<NavBarProps> = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const isToggle = useSelector((state: RootState) => state.ui.isToggle);

  const handleClickOnLogo = () => {
    router.replace("/");
  };
  const handleToggle = () => {
    dispatch(toggle());
  };

  return (
    <Header isToggle={isToggle}>
      <Nav>
        <Ul isToggle={isToggle}>
          <ToggleButton onToggle={handleToggle} />
          <LogoArea onClick={handleClickOnLogo}>
            <Logo />
          </LogoArea>
          <Trash isToggle={isToggle} />
          <LocationArea isToggle={isToggle}>
            <LocationBar />
          </LocationArea>
          <ActionsArea isToggle={isToggle}>
            <ButtonHeader>Sign Up</ButtonHeader>
            <ButtonHeader border>Sign In</ButtonHeader>
          </ActionsArea>
        </Ul>
      </Nav>
    </Header>
  );
};

export default NavBar;
