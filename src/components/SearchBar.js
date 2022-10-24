import { useState } from "react";
import { Searchbar } from "react-native-paper";

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChangeInput = (query) => {
    setSearchQuery(query);
  };

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={handleChangeInput}
      value={searchQuery}
    />
  );
};
