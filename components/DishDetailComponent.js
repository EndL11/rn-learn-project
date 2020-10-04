import React from "react";

import { View, Text } from "react-native";
import { Card } from "react-native-elements";

export default function DishDetail(props){
    const dish = props.dish;
    if(dish == null){
        return <View></View>;
    }
    return(
        <Card>
            <Card.Title>{dish.name}</Card.Title>
            <Card.Divider/>
            <Card.Image source={require('./images/uthappizza.png')} />
            <Text style={{margin: 10}}>
                {dish.description}
            </Text>
        </Card>
    );
}