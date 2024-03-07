import { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { HashRouter } from 'react-router-dom';
import ProtectedRoute from './pages/ProtectedRoute/ProtectedRoute';
import AuthPage from './pages/AuthPage/AuthPage';
import './index.css';
import Send from './pages/Send/Send';
import Budget from './pages/Budget/Budget';
import Analytics from './pages/Analytics/Analytics';
import Main from './pages/Main/Main';
import { setUser } from './redux/slices/authSlice';
import { useAppDispatch } from './redux/store';
import { useGetCurrentUserQuery } from './pages/AuthPage/api';

function App() {
  const dispatch = useAppDispatch();
  const { data: currentUser, isSuccess } = useGetCurrentUserQuery();
  useEffect(() => {
    if (isSuccess) {
      dispatch(setUser(currentUser));
    }
  }, [isSuccess]); // eslint-disable-line

  return (
    <div className="page">
      <HashRouter>
        <Routes>
          <Route path="/login" element={<AuthPage />} />
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/" element={<Main />} />
            <Route path="/send" element={<Send />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/analytics" element={<Analytics />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
