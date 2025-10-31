// import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import BottomNavigation from './components/BottomNavigation';
import HomePage from './pages/HomePage';
import ReelsPage from './pages/ReelsPage';
import BookingsPage from './pages/BookingsPage';
import ProfilePage from './pages/ProfilePage';
import AuthPage from './pages/AuthPage';
import CategoryDetailsPage from './pages/CategoryDetailsPage';
import NotificationsPage from './pages/NotificationsPage';
import SearchPage from './pages/SearchPage';
import StoriesPage from './pages/StoriesPage';
import BusinessProfilePage from './pages/BusinessProfilePage';
import Login from './components/Login';
import ReportsPage from './pages/Reports';
import ProfileMyDataPage from './pages/ProfileMyDataPage';
import BalancePage from './pages/BalancePage';
import Incomings from './pages/Incomings';
import AboutAppPage from './pages/AboutAppPage';
import ContactPage from './pages/ContactPage';

function App() {
  const location = useLocation();
  // const navigate = useNavigate()

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (!token && location.pathname !== '/login' && location.pathname !== '/auth') {
  //     navigate('/login');
  //   }
  // }, [location]);

  const isAuthPage = location.pathname === '/auth';
  const isHomePage = location.pathname === '/';
  const isMainTab = ['/', '/reports', '/reels', '/orders', '/profile'].includes(location.pathname);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto bg-white min-h-screen relative">
        {isHomePage && !isAuthPage && (
          <Header />
        )}
        <main className="px-4">
          <Routes>
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/reels" element={<ReelsPage />} />
            <Route path="/orders" element={<BookingsPage />} />
            <Route path="/category/:categoryName" element={<CategoryDetailsPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/stories" element={<StoriesPage />} />
            <Route path="/business-profile" element={<BusinessProfilePage />} />
            <Route path="/profile-my-data" element={<ProfileMyDataPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/balance" element={<BalancePage />} />
            <Route path="/income" element={<Incomings />} />
            <Route path="/share" element={<ProfileMyDataPage />} />
            <Route path="/about-app" element={<AboutAppPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        {isMainTab && !isAuthPage && (
          <BottomNavigation />
        )}
        {/* <Routes>
          <Route path="/profile" element={<ProfilePage />} />
        </Routes> */}
      </div>
    </div>
  );
}

export default App;