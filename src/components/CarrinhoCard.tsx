import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useCart } from "../context/CarrinhoContext";

interface ProductCartProps {
    nome: string;
    foto: string;
    preco: number;
    quantidade: number;
    id: number;
}
export default function ProductCart({ nome, foto, preco, quantidade, id }: ProductCartProps) {
    const { aumentarQuantidade, diminuirQuantidade, removerDoCarrinho } = useCart();


    return (
        <View style={styles.container}>
            <View style={[{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }]}>
                <Image
                    source={{ uri: foto }}
                    style={{ width: 110, height: 120, borderRadius: 15, marginRight: 15 }}
                />
                <View>

                    <Text style={{ fontSize: 20 }}>{nome}</Text>
                    <Text style={{ fontSize: 18, color: 'green' }}>R$ {preco.toFixed(2)}</Text>


                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Text
                            style={{ fontSize: 16, marginRight: 5 }}
                        >
                            Quantidade:
                        </Text>
                        <TouchableOpacity
                            onPress={() => diminuirQuantidade(id)}
                            style={{ padding: 5, backgroundColor: 'gray', marginRight: 5, width: 30, borderRadius: 8 }}
                        >
                            <Text style={{ color: 'white', textAlign: 'center' }}>-</Text>
                        </TouchableOpacity>

                        <Text
                            style={{ padding: 5, marginRight: 5, width: 30, textAlign: 'center' }}
                        >
                            {quantidade}
                        </Text>

                        <TouchableOpacity
                            onPress={() => aumentarQuantidade(id)}
                            style={{ padding: 5, backgroundColor: 'gray', marginRight: 5, width: 30, borderRadius: 8 }}
                        >
                            <Text style={{ color: 'white', textAlign: 'center' }}>+</Text>
                        </TouchableOpacity>

                    </View>

                    <TouchableOpacity
                        onPress={() => removerDoCarrinho(id)}
                        style={{ padding: 5, backgroundColor: 'red', marginTop: 10, borderRadius: 5, alignSelf: 'flex-start', }}
                    >
                        <Text style={{ color: 'white', textAlign: 'center' }}>Remover</Text>
                    </TouchableOpacity>

                </View>

            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
        borderRadius: 15,
        minWidth: '85%',
        backgroundColor: 'white',
    },
})