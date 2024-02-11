import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (order: string) => void;
  sortedOrder: string;
}
const SortSelector = ({ onSelectSortOrder, sortedOrder }: Props) => {
  const sortOrder = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date add" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Relase Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average" },
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by:
        {sortedOrder
          ? sortOrder.find((o) => o.value === sortedOrder)?.label
          : "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrder.map((o) => (
          <MenuItem
            onClick={() => onSelectSortOrder(o.value)}
            key={o.value}
            value={o.value}
          >
            {o.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
