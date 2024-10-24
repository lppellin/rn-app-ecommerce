import { Image, Text, TouchableOpacity, View } from "react-native";

export default function CardProduto(item) {
    return (
        <View>
            <Image

            />

            <Text> {item.nome}</Text>
            <Text> {item.preco}</Text>

            <TouchableOpacity>
                <Text>Adicionar ao carrinho</Text>
            </TouchableOpacity>
        </View>
    )
}