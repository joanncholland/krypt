import { Navbar, Welcome, Footer, Services, Transactions } from "./components";

const App = () => {
  return (
    <div className="miin-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
};

export default App;
