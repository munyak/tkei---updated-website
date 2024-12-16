import { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/company/About';
import Press from './pages/company/Press';
import Support from './pages/resources/Support';
import Security from './pages/legal/Security';

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/press" element={<Press />} />
        <Route path="/support" element={<Support />} />
        <Route path="/security" element={<Security />} />
      </Routes>
    </Router>
  );
};

export default App;