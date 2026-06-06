import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Test from './components/test';
import HomePage from './pages/homePage';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import AdminPage from './pages/adminPage';


function App() {
  return (
       <BrowserRouter> 
      <div className="w-full h-screen bg-primary text-secondary">
        <Routes>
          <Route path="/*" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/admin/*" element={<AdminPage/>}/>
          <Route path="/products" element={<h1>Products Page</h1>}/>
          <Route path="/about" element={<h1>About page</h1>}/>
          <Route path="/contact" element={<h1>Contact Page</h1>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;