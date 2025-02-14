import { globalStyles } from "@/styles/global-styles"
import { Slot } from "expo-router"
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import { View } from "react-native"

const _layout = () => {
  const [] = useFonts ({
        NotoSans: require('../assets/fonts/NotoSans-VariableFont_wdth,wght.ttf')
  })

  return (
    <View style = {globalStyles.background}>
      <Slot/>
        <StatusBar style = 'light'/>
    </View>
  )
}

export default _layout