import { RestaurantsScreen } from "../../features/restaurants/screens/RestaurantsScreen";
import { createStackNavigator } from "@react-navigation/stack";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={{ headerMode: false }}>
      <RestaurantStack.Screen name="Restaurant" component={RestaurantsScreen} />
    </RestaurantStack.Navigator>
  );
};
