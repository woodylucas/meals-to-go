import { StatusBar, SafeAreaView, View } from "react-native";
import styled from "styled-components";
import { SearchBar } from "../../../components/SearchBar";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard";

const SafeArea = styled(SafeAreaView)`
  flex: 1; 
  margin-top: ${StatusBar.currentHeight}px;
`;

const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: 16px;
  background-color: #0000FF;
`;

const SearchBarContainer = styled(View)`
  padding: 16px;
`;

export const RestaurantScreen = () => {
  return (
    <SafeArea>
      <SearchBarContainer>
        <SearchBar />
      </SearchBarContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
};
