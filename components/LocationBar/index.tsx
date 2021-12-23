import { mapPin, calendar, search } from "@assets/index";
import { RootState } from "@store/types";
import { useSelector } from "react-redux";
import { Bar, Location, Icon, Date, Text, Search } from "./styles";
const LocationBar: React.FC = () => {
  const isToggle = useSelector((state: RootState) => state.ui.isToggle);

  return (
    <Bar isToggle={isToggle}>
      <Location>
        <Icon src={mapPin} width={18} height={18} />
        <Text>North Carolina, NC 90025</Text>
      </Location>
      <Date>
        <Icon src={calendar} width={18} height={18} />
        <Text>{"11/03/2021"}</Text>
      </Date>
      <Date>
        <Icon src={calendar} width={18} height={18} />
        <Text>{"12/12/2021"}</Text>
      </Date>
      <Search>
        <Icon src={search} width={18} height={18} />
      </Search>
    </Bar>
  );
};

export default LocationBar;
