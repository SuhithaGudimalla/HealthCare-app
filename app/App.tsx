import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SymptomCheckerScreen from "./SymptomCheckerScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SymptomChecker">
        <Stack.Screen name="SymptomChecker" component={SymptomCheckerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
