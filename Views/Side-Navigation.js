import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';

import Homestack from './Home';
import Friedgestack from './Fridge';
import Search from './Search';

const RootDrawerNavigator = createDrawerNavigator({
    Home:{
        screen:Homestack,
    },
    Friedge:{
        screen:Friedgestack,
    },
    Search:{
        screen:Search,
    }

});


export default createAppContainer(RootDrawerNavigator);