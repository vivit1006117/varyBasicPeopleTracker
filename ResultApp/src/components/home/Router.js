import {createAppContainer, createStackNavigator} from "react-navigation";
import Home from "./Home";
import Details from "./Details";

const RouterComponent = createStackNavigator(
    {
	    Home: {
            screen: Home
        },
	    Details: {
            screen: Details
        }
    },
    {
	    initialRouteName: 'Home',
        mode: "modal",
        headerMode: "none"
    });

const Router = createAppContainer(RouterComponent);
export default Router;