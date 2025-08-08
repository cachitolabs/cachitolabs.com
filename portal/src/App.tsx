import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home  from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Header><Home /></Header>} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App