import { Header } from "./components/Header"
import { Footer } from "./components/Footer"

const App = ({ children }) => {
  return (
    <>
      <Header />

      <main>
        {children}
      </main>

      <Footer />
    </>
  );
}

export default App;
