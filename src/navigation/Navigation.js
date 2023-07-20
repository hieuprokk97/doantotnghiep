import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer, NavigationRouteContext, useNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useTheme} from '@react-navigation/native';
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { createDrawerNavigator } from '@react-navigation/drawer';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useDispatch, useSelector } from 'react-redux';
import auth from '@react-native-firebase/auth'
import { useIsFocused } from '@react-navigation/native';
import Cart from '../screen/Cart';
import CheckOut from '../screen/CheckOut';
import DetailProduct from '../screen/DetailProduct';
import EditProfile from '../screen/EditProfile';
import Favorite from '../screen/Favorite';
import Home from '../screen/Home';
import Product from '../screen/Product';
import Profile from '../screen/Profile';
import SignIn from '../screen/SignIn';
import SignUp from '../screen/SignUp';
import Address from '../screen/Address';
import AddAddress from '../screen/AddAddress';
import EditAddress from '../screen/EditAddress';
import OrderSuccess from '../screen/OrderSuccess';
import Orders from '../screen/Orders';


//#region Admin
import Items from '../screen/Admin/Items';
import Users from '../screen/Admin/Users';
import AddItem from '../screen/Admin/AddItem';
import Order from '../screen/Admin/Orders';
import Notification from '../screen/Admin/Notification';
import EditItem from '../screen/Admin/EditItem';
//#endregion
import { onAuthStateChanged } from 'firebase/auth';
import { ColorSpace } from 'react-native-reanimated';
import { create } from 'react-test-renderer';



const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ProductStack = createStackNavigator();
const FavoriteStack = createStackNavigator();
const AddItemStack = createStackNavigator();
const ItemsStack = createStackNavigator();
const UserStack = createStackNavigator();
const OrderStack = createStackNavigator()

function MyTabs() {
  return (
      <Tab.Navigator screenOptions={{headerShown:false, tabBarHideOnKeyboard: true}}>
          <Tab.Screen name="Home" component={HomeStackScreen} options={{
              tabBarIcon: () => <Icon name='home-outline' size={25} color={'#000'}/>
          }}/>
          <Tab.Screen name="Product" component={ProductStackScreen} options={{
              tabBarIcon: () => <Icon name='search' size={25}  color={'#000'}/>
          }}/>
          <Tab.Screen name="Favorite" component={FavoriteStackScreen} options={{
              tabBarIcon: () => <MaterialIcons name='favorite-border' size={25}  color={'#000'}/>
          }}/>
          <Tab.Screen name="Profile" component={ProfileStackScreen} options={{
              tabBarIcon: () => <Icon name='person' size={25}  color={'#000'}/>
          }}/>
      </Tab.Navigator>
  )
}
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator(); 
function MyAdmin() {
  return (
      <Tab.Navigator screenOptions={{headerShown:false, tabBarHideOnKeyboard: true, tabBarShowLabel: false}}>
          <Tab.Screen name="Items" component={ItemsStackScreen} options={{
              tabBarIcon: ({focused}) => <Image source={require('../../assets/images/admin/items.png')} 
              style={{width: 25, height: 25, tintColor: focused ? 'red' : 'black'
                      }}/>
          }}/>
          <Tab.Screen name="Order" component={UsersStackScreen} options={{
              tabBarIcon: ({focused}) => <Image source={require('../../assets/images/admin/group.png')} 
              style={{width: 25, height: 25, tintColor: focused ? 'red' : 'black'
                      }}/>
          }}/>
          <Tab.Screen name="AddItem" component={AddItemStackScreen} options={{
              tabBarIcon: ({focused}) => <Image source={require('../../assets/images/admin/add.png')} 
              style={{width: 30, height: 30, tintColor: focused ? 'red' : 'black'
                      }}/>
          }}/>
          <Tab.Screen name="Transaction" component={OrderStackScreen} options={{
              tabBarIcon: ({focused}) => <Image source={require('../../assets/images/admin/transaction.png')} 
              style={{width: 25, height: 25, tintColor: focused ? 'red' : 'black'
                      }}/>
          }}/>
          <Tab.Screen name="Notifications" component={Notification} options={{
              tabBarIcon: ({focused}) => <Image source={require('../../assets/images/admin/notification.png')} 
              style={{width: 25, height: 25, tintColor: focused ? 'red' : 'black'
                      }}/>
          }}/>
      </Tab.Navigator>
  )
}

const Navigation = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer> 
      <Drawer.Navigator screenOptions={{headerShown: false}}>
        {user ? <Drawer.Screen name="HomeScreen" component={MyTabs} /> : 
                <>
                <Stack.Screen name='SignIn' component={SignIn}/>
                <Stack.Screen name='SignUp' component={SignUp}/>
                <Drawer.Screen name="Admin" component={MyAdmin}/>
                </>
        }
        </Drawer.Navigator>
    </NavigationContainer>
)}

export default Navigation
//#region UserScreen
const HomeStackScreen = ({navigation}) => {
  const cartItems = useSelector(state => state.cart)
  const {colors} = useTheme();
  const route = useRoute()
  return (
      <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background, 
          shadowColor: colors.background,
          elevation: 0,
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontWeight: 'bold',
        }
    }}>
    <HomeStack.Screen
      name='HomeScreen'
      component={Home}
      options={{
        title: "Trang chủ",
        headerLeft: () => (
          <View style={{marginLeft: 10}}>
            <Icon.Button
              name='menu' 
              size={25}
              color={colors.text}
              backgroundColor={colors.background}
              onPress={() => {navigation.openDrawer()}}/> 
          </View>
        ),
        headerRight: () => (
          <View style={{flexDirection: 'row', marginRight: 10}}>
            <View>
              <Icon.Button
                name="cart"
                size={25}
                color={colors.text}
                backgroundColor={colors.background}
                onPress={() => {navigation.navigate('Cart')}}
              />
              <View style={{
                width: 20, 
                height: 20, 
                borderRadius: 10, 
                backgroundColor:'red',
                position:'absolute', 
                right: 0, 
                top: 0,
                marginRight: 10,
                alignItems: 'center'}}>
                <Text style={{color: '#FFF', fontSize: 11}}>{cartItems.data.length}</Text>
              </View>
            </View>
             
            <TouchableOpacity 
              style={{paddingHorizontal: 10, marginTop: 5}}
              onPress={() => {navigation.navigate('Other')}}>
                <Avatar.Image
                  source={require('../../assets/images/avatar.png')}
                  size={30}/>
            </TouchableOpacity>
          </View>
        ),
      }}/>
      <HomeStack.Screen
        name="Detail" component={DetailProduct}
        options={({route}) => ({
          headerBackTitleVisible: false,
          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <View>
                <Icon.Button
                  name="cart"
                  size={25}
                  color={colors.text}
                  backgroundColor={colors.background}
                  onPress={() => {navigation.navigate('Cart')}}
                />
                <View style={{
                  width: 20, 
                  height: 20, 
                  borderRadius: 10, 
                  backgroundColor:'red',
                  position:'absolute', 
                  right: 0, 
                  top: 0,
                  marginRight: 10,
                  alignItems: 'center'}}>
                  <Text style={{color: '#FFF', fontSize: 11}}>{cartItems.data.length}</Text>
                </View>
              </View>
            </View>
          ),
        })}/>
      <HomeStack.Screen
        name='Cart' component={Cart}
        options={{
          title: 'Cart',
        }}
        />
      <HomeStack.Screen
        name='CheckOut'
        component={CheckOut}
        options={{
          title: 'CheckOut Screen',
        }}
        
      />
      <HomeStack.Screen
      name="Address"
      component={Address}
      options={{
        title: `Address`,
        headerRight: () => (
          <View style={{marginRight: 10, flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => {navigation.navigate("AddAddress", {type: "new"})}}>
              <Image source={require('../../assets/images/add_address.png')}
                  style={{height: 25, width: 25}}/>
            </TouchableOpacity>
          </View>
        ),
      }}
      />
      <HomeStack.Screen
      name="AddAddress"
      component={AddAddress}
      options={{
        title: 'Add New Address',
      }}
      />
      <HomeStack.Screen
      name="EditAddress"
      component={EditAddress}
      options={{
        title: 'Edit Address',
      }}
      />
      
      <HomeStack.Screen
      name="OrderSuccess"
      component={OrderSuccess}
      options={{
        headerShown: false
      }}
      />

  </HomeStack.Navigator>
  )
}
const ProfileStackScreen = ({navigation}) => {
const {colors} = useTheme();
return (
  <ProfileStack.Navigator 
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.background,
        shadowColor: colors.background, // iOS
        elevation: 0, // Android
      },
      headerTintColor: colors.text,
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }}>
    <ProfileStack.Screen
      name="ProfileScreen"
      component={Profile}
      options={{
        title: 'Profile',
        headerRight: () => (
          <View style={{marginRight: 10, flexDirection: 'row'}}>
            <MaterialCommunityIcons.Button
              name="account-edit"
              size={25}
              backgroundColor={colors.background}
              color={colors.text}
              onPress={() => navigation.navigate('EditProfile')}
            />
          </View>
        ),
      }}
    />
    <ProfileStack.Screen
      name="EditProfile"
      options={{
        title: 'Edit Profile',
      }}
      component={EditProfile}
    />
    
    <ProfileStack.Screen
      name="SignUp"
      component={SignUp}
      options={{
        headerShown: false,
      }}
    />
    <ProfileStack.Screen
      name="Orders"
      component={Orders}
      options={{
        title: "Orders",
      }}
    />

  </ProfileStack.Navigator>
)
}
const ProductStackScreen = ({navigation}) => {
  const cartItems = useSelector(state => state.cart)
  const {colors} = useTheme();
  return (
    <ProductStack.Navigator 
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background, // iOS
          elevation: 0, // Android
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontWeight: 'bold',
        }
      }}>
      <ProductStack.Screen
        name='Products'
        component={Product}
        options={{
          title: "Product",
          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <View>
                <Icon.Button
                  name="cart"
                  size={25}
                  color={colors.text}
                  backgroundColor={colors.background}
                  onPress={() => {navigation.navigate('Cart')}}
                />
                <View style={{
                  width: 20, 
                  height: 20, 
                  borderRadius: 10, 
                  backgroundColor:'red', 
                  position:'absolute', 
                  right: 0, 
                  top: 0,
                  marginRight: 10,
                  alignItems: 'center'}}>
                  <Text style={{color: '#FFF', fontSize: 11}}>{cartItems.data.length}</Text>
                </View>
              </View>
            </View>
          ),
        }}/>
    </ProductStack.Navigator>
)
}
const FavoriteStackScreen = ({navigation}) => {
  const cartItems = useSelector(state => state.cart)
  const {colors} = useTheme();
  return (
    <FavoriteStack.Navigator 
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background, // iOS
          elevation: 0, // Android
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontWeight: 'bold',
        }
      }}>
      <ProductStack.Screen
        name="FavoriteScreen"
        component={Favorite}
        options={{
          title: 'Favorite',
          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <View>
                <Icon.Button
                  name="cart"
                  size={25}
                  color={colors.text}
                  backgroundColor={colors.background}
                  onPress={() => {navigation.navigate('Cart')}}
                />
                <View style={{
                  width: 20, 
                  height: 20, 
                  borderRadius: 10, 
                  backgroundColor:'red',
                  position:'absolute', 
                  right: 0, 
                  top: 0,
                  marginRight: 10,
                  alignItems: 'center'}}>
                  <Text style={{color: '#FFF', fontSize: 11}}>{cartItems.data.length}</Text>
                </View>
              </View>
            </View>
          ),
        }}
      />
      
    </FavoriteStack.Navigator>
  )
}
//#endregion

//#region AdminScreen
const AddItemStackScreen = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <AddItemStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background, 
          shadowColor: colors.background,
          elevation: 0,
        },
          headerTintColor: colors.text,
          headerTitleStyle: {
            fontWeight: 'bold',
        }
      }}>
        <AddItemStack.Screen
          name='AddItemScreen'
          component={AddItem}
          
          options={{
            title: 'Add an Item',
            headerStyle: {
              backgroundColor: 'red'
            }
            
          }}
          />
    </AddItemStack.Navigator>
  )
}
const ItemsStackScreen = ({}) => {
  const navigation = useNavigation()
  const {colors} = useTheme();
  return (
    <ItemsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background, 
          shadowColor: colors.background,
          elevation: 0,
        },
          headerTintColor: colors.text,
          headerTitleStyle: {
            fontWeight: 'bold',
        }
      }}>
        <ItemsStack.Screen
          name='ItemsScreen'
          component={Items}
          options={{
            title: 'List Items',
            headerStyle: {
              backgroundColor: 'red'
            },
            headerRight: () => (
              <View style={{marginLeft: 10}}>
                <Icon.Button
                  name='exit' 
                  size={25}
                  color={colors.text}
                  backgroundColor={'red'}
                  onPress={() => {navigation.navigate("SignIn")}}/> 
              </View>
            ),
          }}
          />
        <ItemsStack.Screen
          name='EditItemScreen'
          component={EditItem}
          options={{
            title: 'Edit Item',
            headerStyle: {
              backgroundColor: 'red'
            }
          }}
          />
    </ItemsStack.Navigator>
  )
}
const UsersStackScreen = ({}) => {
  const {colors} = useTheme()
  return (
    <UserStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background, 
          shadowColor: colors.background,
          elevation: 0,
        },
          headerTintColor: colors.text,
          headerTitleStyle: {
            fontWeight: 'bold',
        }
      }}>
        <UserStack.Screen
          name='UserScreen'
          component={Users}
          options={{
            title: 'List Users',
            headerStyle: {
              backgroundColor: 'red'
            }
          }}
          />
    </UserStack.Navigator>
  )
}
const OrderStackScreen = ({}) => {
  const {colors} = useTheme()
  return (
    <OrderStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background, 
          shadowColor: colors.background,
          elevation: 0,
        },
          headerTintColor: colors.text,
          headerTitleStyle: {
            fontWeight: 'bold',
        }
      }}>
        <OrderStack.Screen
          name='Order'
          component={Order}
          options={{
            title: 'Orders',
            headerStyle: {
              backgroundColor: 'red'
            }
          }}
          />
    </OrderStack.Navigator>
  )
}
//#endregion