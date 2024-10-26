import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useCart } from "../context/CarrinhoContext";
import ProductCart from "../components/CarrinhoCard";

export default function Carrinho() {
    const { carrinho } = useCart(); //  hook useCart para acessar o contexto

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {carrinho.length > 0 ? (
                    carrinho.map(produto => (
                        <ProductCart
                            key={produto.id}
                            id={produto.id}
                            nome={produto.nome}
                            foto={produto.foto}
                            preco={produto.preco}
                            quantidade={produto.quantidade}
                        />
                    ))
                ) : (
                    <Text style={{ textAlign: 'center', marginTop: 20 }}>O carrinho está vazio</Text>
                )}
            </ScrollView>

            <TouchableOpacity
                style={{ padding: 10, backgroundColor: 'green', width: '100%' }}
            >
                <Text style={{ color: 'white', textAlign: 'center' }}>Finalizar compra</Text>

            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'lightgray',
        alignItems: 'center',
    },

});