import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import About from './pages/About'
import Locations from './pages/Locations'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import BlogDetail from './pages/BlogDetail'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import ForgotPassword from './pages/auth/ForgotPassword'
import VerifyCode from './pages/auth/VerifyCode'
import SetNew from './pages/auth/SetNew'
import PrivacyPolicy from './pages/policy/PrivacyPolicy'
import DMCA from './pages/policy/DMCA'
import HomeInsurance from './pages/InsurancePages/HomeInsurance'
import Layout from './pages/InsurancePages/Layout'
import AutoInsurance from './pages/InsurancePages/AutoInsurance'
import CommercialInsurance from './pages/InsurancePages/CommercialInsurance'
import LifeInsurance from './pages/InsurancePages/LifeInsurance'
import RentersInsurance from './pages/InsurancePages/RentersInsurance'
import FloodInsurance from './pages/InsurancePages/FloodInsurance'
import ScrollToTop from "./ScrollToTop";
import Dashboard from './dashboard/Dashboard'
import Policy from './dashboard/Policy'
import Billing from './dashboard/Billing'
import Setting from './dashboard/Setting'




function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <div className="flex flex-col min-h-screen">

        <Header />

        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/location" element={<Locations />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/verifyCode" element={<VerifyCode />} />
            <Route path="/setNew" element={<SetNew />} />
            <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/dmca" element={<DMCA />} />
            <Route path="/homeInsurance" element={<HomeInsurance />} />
            <Route path="/autoInsurance" element={<AutoInsurance />} />
            <Route path="/commercialInsurance" element={<CommercialInsurance />} />
            <Route path="/lifeInsurance" element={<LifeInsurance />} />
            <Route path="/rentersInsurance" element={<RentersInsurance />} />
            <Route path="/floodInsurance" element={<FloodInsurance />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </main>

    <Footer />

      </div>

    </BrowserRouter>
  )
}

export default App