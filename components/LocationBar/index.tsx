import { mapPin, calendar, search } from "@assets/index";
import { Bar, Location, Icon, Date, Text, Search } from "./styles";

// #F3F1FC
const LocationBar: React.FC = () => {
  return (
    <Bar>
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
