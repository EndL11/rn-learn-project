import React from "react";

import { View, Text } from "react-native";
import { Card } from "react-native-elements";
import { DISHES } from "../shared/dishes";

export default class DishDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dishes: DISHES
        };
    }
    render(){
        const dishId = this.props.route.params?.dishId;
        const dish = this.state.dishes.find(dish => dish.id === dishId);
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
}