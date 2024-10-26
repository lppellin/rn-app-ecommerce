import React, { createContext, useContext, useState, ReactNode } from 'react';

// definindo o tipo do produto no carrinho
type Produto = {
    id: number;
    nome: string;
    preco: number;
    foto: string;
    quantidade: number;
};

type CartContextType = {
    carrinho: Produto[];
    adicionarAoCarrinho: (produto: Produto) => void;
    removerDoCarrinho: (produtoId: number) => void;
    aumentarQuantidade: (produtoId: number) => void;
    diminuirQuantidade: (produtoId: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

// hook personalizado para o CartContext
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart deve ser usado dentro de um CartProvider");
    }
    return context;
};

export function CartProvider({ children }: { children: ReactNode }) {
    const [carrinho, setCarrinho] = useState<Produto[]>([]);

    const adicionarAoCarrinho = (produto: Produto) => {
        setCarrinho((prevCarrinho) => {
            const produtoExistente = prevCarrinho.find(item => item.id === produto.id);
            if (produtoExistente) {
                return prevCarrinho.map(item =>
                    item.id === produto.id
                        ? { ...item, quantidade: item.quantidade + 1 }
                        : item
                );
            } else {
                return [...prevCarrinho, { ...produto, quantidade: 1 }];
            }
        });
    };

    const removerDoCarrinho = (produtoId: number) => {
        setCarrinho((prevCarrinho) => prevCarrinho.filter(item => item.id !== produtoId));
    };

    const aumentarQuantidade = (produtoId: number) => {
        setCarrinho((prevCarrinho) =>
            prevCarrinho.map(item =>
                item.id === produtoId ? { ...item, quantidade: item.quantidade + 1 } : item
            )
        );
    };

    const diminuirQuantidade = (produtoId: number) => {
        setCarrinho((prevCarrinho) =>
            prevCarrinho
                .map(item =>
                    item.id === produtoId && item.quantidade > 1
                        ? { ...item, quantidade: item.quantidade - 1 }
                        : item
                )
                .filter(item => item.quantidade > 0)
        );
    };

    return (
        <CartContext.Provider value={{ carrinho, adicionarAoCarrinho, removerDoCarrinho, aumentarQuantidade, diminuirQuantidade }}>
            {children}
        </CartContext.Provider>
    );
}

export { CartContext };
