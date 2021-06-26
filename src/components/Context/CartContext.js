import { createContext, useState, useContext, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({})
  useEffect(() => {
    const cartLocal = window.localStorage.getItem('cart')
    if (cartLocal) {
      setCart(JSON.parse(cartLocal))
    }
  }, [])
  const addToCart = (produto) => {
    setCart((old) => {
      let quantidade = 0
      let total = 0
      if (old[produto.id]) {
        quantidade = old[produto.id].quantidade;
        if(quantidade >= old[produto.id].produto.qtdEstoque)
        {
          quantidade = (old[produto.id].produto.qtdEstoque - 1);
          console.log("coisinha");
        }
      }
      const newCart = {
        ...old,
        [produto.id]: {
          quantidade: quantidade + 1,
          produto,
          total: produto.valor * (quantidade + 1),
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
        if (id !== produtoId) {
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
        const novoProduto = { ...old[id] }
        if (id === produtoId) {
          if (novaQuantidade < 1) {
            novoProduto.quantidade = 1;
            novoProduto.total = novoProduto.produto.valor * 1;
            console.log("teste1");
          } else if (novaQuantidade > novoProduto.produto.qtdEstoque) {
            novoProduto.quantidade = novoProduto.produto.qtdEstoque;
            novoProduto.total = novoProduto.produto.valor * novoProduto.produto.qtdEstoque;
            console.log("teste2");
          } else {
            novoProduto.quantidade = novaQuantidade;
            novoProduto.total = novoProduto.produto.valor * novaQuantidade;
            console.log("teste3");
          }
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