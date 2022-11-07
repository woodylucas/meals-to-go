import { useContext } from "react";
import { View, FlatList } from "react-native";
import styled from "styled-components/native";
import { SearchBar } from "../../../components/SearchBar";
import { Spacer } from "../../../components/spacer/Spacer";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard";
import { SafeArea } from "../../../components/utils/SafeAreaComponent";
import { RestaurantContext } from "../../../services/restaurants/RestaurantsContext";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const SearchBarContainer = styled(View)`
  padding: ${({ theme }) => theme.space[3]};
`;

export const RestaurantScreen = () => {
  const { restaurants, error, isLoading } = useContext(RestaurantContext);
  return (
    <SafeArea>
      <SearchBarContainer>
        <SearchBar />
      </SearchBarContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard restaurant={item} />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
        // eslint-disable-next-line react-native/no-inline-styles
      />
    </SafeArea>
  );
};
