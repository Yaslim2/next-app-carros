import { RootState } from "@store/types";
import { useSelector } from "react-redux";
import { BackToTopArea, BackToTopIcon } from "./styles";
const BackToTopButton: React.FC = () => {
  const isToggle = useSelector((state: RootState) => state.ui.isToggle);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <BackToTopArea isToggle={isToggle} onClick={scrollTop}>
      <BackToTopIcon />
    </BackToTopArea>
  );
};

export default BackToTopButton;
