import './App.css'
import Navbar from './components/navbar';
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

function App() {

  return (
    <>
      <Navbar icon={<FaTwitter />} count= "12000" title ="Twitter Followers"></Navbar>
      <Navbar icon={<FaYoutube />} count= "5000" title ="YouTube Subscribers"></Navbar>
      <Navbar icon={<FaFacebook />} count= "7500" title ="Facebook Fans"></Navbar>
    </>
  )
}

export default App
