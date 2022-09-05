import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BaseScreen } from './components/base_screen/BaseScreen';
import ScrollToTop from './components/scroll_to_top/ScroolToTop';
import { About } from './pages/about/About';
import { Contact } from './pages/contact/Contact';
import { Home } from './pages/home/Home';
import { Teams } from './pages/teams/Teams';
import TeamDetail from './pages/team_detail/TeamDetail';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<BaseScreen />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='team'>
              <Route index element={<Teams />} />
              <Route path=':teamId' element={<TeamDetail />} />
            </Route>
          </Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
