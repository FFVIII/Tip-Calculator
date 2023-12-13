import {Text,View, FlatList,useWindowDimensions,StyleSheet,Image} from 'react-native';

export default function OnboardingItem({item}){
    const {width}=useWindowDimensions();
    return(
        <View style={[myStyle.container,{width}]}>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
            <Image source={item.img}/>
        </View>
    );
}

const myStyle=StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'green'
    }
});