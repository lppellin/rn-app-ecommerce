import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface CardProdutoProps {
    nome: string;
    foto: string;
    preco: number;
    onAddToCart: () => void;
}

export default function CardProduto({ nome, foto, preco, onAddToCart }: CardProdutoProps) {
    return (
        <View style={styles.container}>


            <View style={[{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }]}>
                <Image
                    source={{ uri: foto }}
                    style={{ width: 110, height: 120, borderRadius: 15, marginRight: 15 }}
                />

                <View>
                    <Text style={{ fontSize: 18 }}>{nome}</Text>
            
                    <Text style={{ fontSize: 16, color: 'green' }}>R$ {preco.toFixed(2)}</Text>
            
                    <TouchableOpacity onPress={onAddToCart} style={{ padding: 5, backgroundColor: 'blue', marginTop: 10 }}>
                        <Text style={{ color: 'white' }}>Adicionar ao carrinho</Text>
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