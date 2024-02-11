import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

// export interface Search {
//   search: string;
// }
// const AppContext = React.createContext<Search>;
interface Props {
  onSearch: (searchText: string) => void;
}
const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
        //   React.createContext<Search>({ search: ref.current.value });
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />}></InputLeftElement>
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
