import React from "react";

import { FlatList } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

function Menu(props) {
  const renderItemMenu = ({ item, index }) => {
    return (
      <ListItem key={index} onPress={() => props.onDishPress(item.id)}>
        <Avatar rounded={true} source={require("./images/uthappizza.png")} />
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
          <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
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
