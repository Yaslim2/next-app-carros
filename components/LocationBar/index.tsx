import { RootState } from "@store/types";
import { useSelector } from "react-redux";
import {
  Bar,
  Location,
  CalendarIcon,
  MapPinIcon,
  Date,
  Text,
  Search,
  SearchIcon,
} from "./styles";
const LocationBar: React.FC = () => {
  const isToggle = useSelector((state: RootState) => state.ui.isToggle);

  return (
    <Bar isToggle={isToggle}>
      <Location>
        <MapPinIcon />
        <Text>North Carolina, NC 90025</Text>
      </Location>
      <Date>
        <CalendarIcon />
        <Text>{"11/03/2021"}</Text>
      </Date>
      <Date>
        <CalendarIcon />
        <Text>{"12/12/2021"}</Text>
      </Date>
      <Search>
        <SearchIcon />
      </Search>
    </Bar>
  );
};

export default LocationBar;
