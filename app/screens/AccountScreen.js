import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';


import Listitem from './../components/ListItem';
import Screen from '../components/Screen';
import colors from '../config/colors';
import Appicon from './../components/AppIcon';
import Listitemseparator from './../components/ListItemSeparator';
import routes from '../navigation/routes';
import useAuth from './../auth/useAuth';


const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        },
        targetScreen: routes.FEED,
        parameters: {
            screen: routes.MY_LISTINGS,
            params: null
        }
    },

    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        },
        targetScreen: routes.MESSAGES,
        parameters: null,
    },

]

const Accountscreen = ({ navigation }) => {
    const { user, setUser, logOut } = useAuth();//from context that is
    // const handleLogout = () => {
    //     setUser(null)
    //     authStorage.removeToken();
    // }
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <Listitem
                    title={user.name.toUpperCase()}
                    subTitle={user.email}
                    imageUrl={user.image.url}
                    thumbnailUrl={user.image.thumbnailUrl}
                    onPress={() => navigation.navigate(routes.ACCOUNT_EDIT, user)}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={(menuItem) => menuItem.title}
                    renderItem={({ item }) => (
                        <Listitem
                            title={item.title}
                            IconComponent={
                                <Appicon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                            onPress={() => navigation.navigate(item.targetScreen, item.parameters)}
                        />
                    )}
                    ItemSeparatorComponent={Listitemseparator}
                />
            </View>

            <Listitem
                title={"Log Out"}
                IconComponent={
                    <Appicon
                        name={"logout"}
                        backgroundColor={colors.danger}
                        iconColor={colors.white}
                    />
                }
                onPress={() => logOut()}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    screen: {
        backgroundColor: colors.lightGrey,
    }
})

export default Accountscreen;
