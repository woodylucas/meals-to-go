import { ThemeProvider } from "styled-components";
import { RestaurantScreen } from "./src/features/restaurants/screens/RestaurantScreen";
import { theme } from "./src/infrastructure/theme";
export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
      </ThemeProvider>
    </>
  );
}
