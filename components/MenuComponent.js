import React from "react";

import { FlatList } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { DISHES } from "../shared/dishes";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    const { navigate } = this.props.navigation;

    const renderItemMenu = ({ item, index }) => {
      return (
        <ListItem
          key={index}
          onPress={() => navigate("DishDetail", { dishId: item.id, title: item.name })}
        >
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
        data={this.state.dishes}
        keyExtractor={(item) => item.id}
        renderItem={renderItemMenu}
      />
    );
  }
}

export default Menu;
