import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/CarrinhoContext";
import CardProduto from "../components/CardProduto";

export default function Produtos({ navigation }) {
    const [produtos, setProdutos] = useState([
        { id: 1, nome: "Produto 1", foto: "https://via.placeholder.com/100", preco: 100.00 },
        { id: 2, nome: "Produto 2", foto: "https://via.placeholder.com/100", preco: 200.00 },
        { id: 3, nome: "Produto 3", foto: "https://via.placeholder.com/100", preco: 300.00 },
        { id: 4, nome: "Produto 4", foto: "https://via.placeholder.com/100", preco: 400.00 },
    ]);

    const [busca, setBusca] = useState('');
    const [produtosFiltrados, setProdutosFiltrados] = useState(produtos);

    // Puxando o contexto
    const { adicionarAoCarrinho } = useContext(CartContext);

    useEffect(() => {
        if (busca === '') {
            setProdutosFiltrados(produtos);
        } else {
            const produtosFiltrados = produtos.filter(produto =>
                produto.nome.toLowerCase().includes(busca.toLowerCase())
            );
            setProdutosFiltrados(produtosFiltrados);
        }
    }, [busca, produtos]);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text style={{ fontSize: 24, textAlign: 'center' }}>Lista de Produtos</Text>

            <TextInput
                placeholder="Buscar produto..."
                value={busca}
                onChangeText={setBusca}
                style={{
                    margin: 10,
                    padding: 10,
                    borderWidth: 1,
                    borderRadius: 5,
                    fontSize: 16
                }}
            />

            <ScrollView>
                {produtosFiltrados.length > 0 ? (
                    produtosFiltrados.map(produto => (
                        <CardProduto
                            key={produto.id}
                            nome={produto.nome}
                            foto={produto.foto}
                            preco={produto.preco}
                            onAddToCart={() => adicionarAoCarrinho(produto)}
                        />
                    ))
                ) : (
                    <Text style={{ textAlign: 'center', marginTop: 20 }}>Nenhum produto encontrado</Text>
                )}
            </ScrollView>

            <TouchableOpacity
                onPress={() => navigation.navigate('Carrinho')}
                style={{ padding: 10, backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center' }}
            >
                <Text style={{ color: 'white' }}>Carrinho</Text>

            </TouchableOpacity>

        </SafeAreaView>
    );
}
