import React from "react";
import { ScrollView, View, Text } from "react-native";
import { Card } from "react-native-elements";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import { DISHES } from "../shared/dishes";

function RenderItem(props) {
  const item = props.item;
  if (item == null) {
    return <View></View>;
  }
  return (
    <Card>
      <Card.Title>{item.name}</Card.Title>
      <Card.FeaturedSubtitle style={{color:"#000", textAlign:"center"}}>{item.designation}</Card.FeaturedSubtitle>
      <Card.Image source={require("./images/uthappizza.png")} />
      <Text style={{ margin: 10, textAlign:"justify" }}>{item.description}</Text>
    </Card>
  );
}

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      promotions: PROMOTIONS,
      leaders: LEADERS,
    };
  }

  render() {
    return (
      <ScrollView>
        <RenderItem item={this.state.dishes.filter(dish => dish.featured)[0]}/>
        <RenderItem item={this.state.promotions.filter(promotion => promotion.featured)[0]}/>
        <RenderItem item={this.state.leaders.filter(leader => leader.featured)[0]}/>
      </ScrollView>
    );
  }
}
