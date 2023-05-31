import ParityCheck from 'pages/ParityCheck';
import { CRCPage } from './pages/CRCPage';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './pages/Layout';
import { NoMatch } from './pages/NoMatch';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Navigate to='/parity-check' replace />} />
          <Route path='parity-check' element={<ParityCheck />} />
          <Route path='crc' element={<CRCPage />} />
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
