import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home  from './pages/Home';
import Footer from './components/Footer';
import BuyMeACoffee from './pages/BuyMeACoffee';
import Guides from './pages/Guides';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Header><Home /></Header>} />
          <Route path="/guides" element={<Header><Guides /></Header>} />
          <Route path="/buymeacoffee" element={<Header><BuyMeACoffee /></Header>} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App