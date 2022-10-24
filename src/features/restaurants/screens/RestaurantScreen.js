import { StatusBar, SafeAreaView, View } from "react-native";
import styled from "styled-components";
import { SearchBar } from "../../../components/SearchBar";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard";

const SafeArea = styled(SafeAreaView)`
  flex: 1; 
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: ${({ theme }) => theme.space[3]};
`;

const SearchBarContainer = styled(View)`
  padding:${({ theme }) => theme.space[3]};
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
