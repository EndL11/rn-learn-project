import React from "react";

import { View, FlatList } from "react-native";
import { ListItem } from "react-native-elements";

function Menu(props) {
  const renderItemMenu = ({ item, index }) => {
    return <ListItem 
        title={item.name}
        subtitle={item.description}
        chevron={false}
        leftAvatar={{source: require('./images/uthappizza.png')}}
    />;
  };
  return (
    <FlatList
      data={props.dishes}
      keyExtractor={(item) => item.id}
      renderItem={renderItemMenu}
    />
  );
}

export default Menu;
