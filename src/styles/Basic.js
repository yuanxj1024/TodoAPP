/**
 * Created by AaronYuan on 01/12/2016.
 */
import {StyleSheet, Dimensions} from "react-native";

let winSize = Dimensions.get('window');

const Basic = StyleSheet.create({
    text: {
        fontSize: 32 / winSize.scale
    }
});

export default Basic;
