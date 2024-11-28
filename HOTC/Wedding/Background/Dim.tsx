import {Dimensions, PixelRatio} from "react-native";

const {width, height} = Dimensions.get("window");

const wp = (number: string) => {
    let givenWidth = typeof number === "number" ? number : parseFloat(number);
    console.log("my",PixelRatio.roundToNearestPixel((width * givenWidth) / 100))
    return PixelRatio.roundToNearestPixel((width * givenWidth) / 100);

};

const hp = (number: string) => {
    let givenHeight = typeof number === "number" ? number : parseFloat(number);
    return PixelRatio.roundToNearestPixel((height * givenHeight) / 100);
};
console.log(hp)
export {wp, hp};