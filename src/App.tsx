import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { BaseScreen } from './components/base_screen/BaseScreen';
import { About } from './pages/about/About';
import Career from './pages/career/Career';
import { Contact } from './pages/contact/Contact';
import { Home } from './pages/home/Home';
import Blog from './pages/blog/Blog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BaseScreen />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='blog' element={<Blog />} />
          <Route path='career' element={<Career />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
