import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Produtos({ navigation }) {
    return (
        <View>
            <Text>Produtos</Text>

            <TouchableOpacity
                onPress={() => navigation.navigate('Carrinho')}
            >
                <Image />
                <Text>Carrinho</Text>

            </TouchableOpacity>

        </View>
    );
}