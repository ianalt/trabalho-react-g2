import { createContext, useState, useContext, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({})
  useEffect(() => {
    const cartLocal = window.localStorage.getItem('cart')
    if(cartLocal){
      setCart(JSON.parse(cartLocal))
    }
  }, [])
  const addToCart = (produto) => {
      setCart((old) => {
        let quantidade = 0
        let total = 0
        if (old[produto.id]) {
          quantidade = old[produto.id].quantidade;
        }
        const newCart = {
          ...old,
          [produto.id]: {
            quantidade: quantidade + 1,
            produto,
            total: produto.valor * (quantidade+1),
          },
        }
        window.localStorage.setItem('cart', JSON.stringify(newCart))
        return newCart
      })
    }

    const removeFromCart = (produtoId) => {
      setCart(old => {
        const newCart = {}
        Object.keys(old).forEach(id => {
          if(id !== produtoId){
            newCart[id] = old[id]
          }
        })
        window.localStorage.setItem('cart', JSON.stringify(newCart))
        return newCart
      })
    }

    const changeQuantidade = (produtoId, novaQuantidade) => {
      setCart(old => {
        const newCart = {}
        Object.keys(old).forEach(id => {
          const novoProduto = {...old[id]}
          if(id === produtoId){
            novoProduto.quantidade = novaQuantidade;
            novoProduto.total = novoProduto.produto.valor * novaQuantidade;
          }
          newCart[id] = novoProduto
        })
        window.localStorage.setItem('cart', JSON.stringify(newCart))
        return newCart
      })
    }

    function clearCart() {
      setCart([]);
    }

    return (
      <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, changeQuantidade }}>
        {children}
      </CartContext.Provider>
    )
  }

  export const useCart = () => {
    const cart = useContext(CartContext)
    return cart
  }