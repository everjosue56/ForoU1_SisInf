import { globalStyles } from "@/styles/global-styles"
import { View, Text } from "react-native"

export const TitleText = () => {
    return (
        <View style = {globalStyles.viewTitle}>
             <Text style = {globalStyles.title}> 
                    Conversor de Moneda
             </Text>
        </View>
    )
}