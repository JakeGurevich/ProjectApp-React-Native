import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Context as AuthContext} from '../context/AuthContext';

const DrawerContent = props => {
  const {signOut} = React.useContext(AuthContext);
  return (
    <>
      {/* // <View style={{flex: 1}}> */}
      <View style={styles.drawerContent}>
        <View style={styles.bg}>
          <Text style={styles.infoTitle}>Welcome to Appleseeds</Text>
        </View>
        <DrawerContentScrollView {...props}>
          <View style={{flex: 1}}>
            <View style={styles.userInfoSection}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <View style={{flexDirection: 'column', marginLeft: 15}}>
                  <Title style={styles.title}>יעקב גורביץ'</Title>
                  {/* <Caption style={styles.caption}>@bill</Caption> */}
                </View>
                <Avatar.Image
                  source={{
                    uri: 'https://storage.googleapis.com/stateless-campfire-pictures/2019/04/6f56fc81-dummyuserimage-1556273962c8p4l.jpg',
                  }}
                  size={40}
                />
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              label="פרופיל"
              icon={({color, size}) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              onPress={() => props.navigation.navigate('Profile')}
            />
            <DrawerItem
              label="קורסים"
              icon={({color, size}) => (
                <Icon name="bookshelf" color={color} size={size} />
              )}
              onPress={() => props.navigation.navigate('Home')}
            />
            <DrawerItem
              label="הגדרות"
              icon={({color, size}) => (
                <Icon name="cog-outline" color={color} size={size} />
              )}
            />
            <DrawerItem
              label="סטודנטים"
              icon={({color, size}) => (
                <Icon name="bookshelf" color={color} size={size} />
              )}
              onPress={() => props.navigation.navigate('Students')}
            />
          </Drawer.Section>
        </DrawerContentScrollView>
        <Drawer.Section style={styles.bottomDrawerSection}>
          <DrawerItem
            label="התנתקות"
            icon={({color, size}) => (
              <Icon name="exit-to-app" color={color} size={size} />
            )}
            onPress={() => signOut()}
          />
        </Drawer.Section>
      </View>
      {/* // </View> */}
    </>
  );
};
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingVertical: 10,
    // paddingLeft: 20,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  bg: {
    color: 'white',
    backgroundColor: '#1E90FF',
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoTitle: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
    paddingVertical: 20,
    paddingLeft: 10,
    color: 'white',
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: 'grey',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
export default DrawerContent;
