import { StatusBar, SafeAreaView, View, FlatList } from "react-native";
import styled from "styled-components/native";
import { SearchBar } from "../../../components/SearchBar";
import { Spacer } from "../../../components/spacer/Spacer";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const SearchBarContainer = styled(View)`
  padding: ${({ theme }) => theme.space[3]};
`;

export const RestaurantScreen = () => {
  return (
    <SafeArea>
      <SearchBarContainer>
        <SearchBar />
      </SearchBarContainer>
      <RestaurantList
        data={[{ name: 1 }, { name: 2 }]}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
        // eslint-disable-next-line react-native/no-inline-styles
      />
    </SafeArea>
  );
};
