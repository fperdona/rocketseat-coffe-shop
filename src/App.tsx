import { ThemeProvider } from 'styled-components' // Importa o ThemeProvider para aplicar temas globais
import { Outlet } from 'react-router-dom' // Importa Outlet para renderizar componentes baseados em rotas
import { Header } from './components/Header' // Importa o componente Header
import { GlobalStyle } from './styles/global' // Importa estilos globais
import { defaultTheme } from './styles/themes/default' // Importa o tema padrão
import { CartContextProvider } from './contexts/CartProvider' // Importa o provider de contexto do carrinho

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      {/* O Context permite que compartilhamos estado do carrinho de compra 
      entre vários componentes sem precisar passar props manualmente em cada nível. */}
      <CartContextProvider>
        <Header />
        {/* Outlet -> Dependendo da rota atual, o conteúdo será renderizado aqui. */}
        <Outlet />
      </CartContextProvider>
    </ThemeProvider>
  )
}
