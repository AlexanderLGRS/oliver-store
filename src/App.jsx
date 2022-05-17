import { useEffect, useState } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import './App.css';
import Hero from './Components/Hero';
import Layout from './Components/Layout';
import Products from "./Pages/Products";

const urlBase = 'https://api.escuelajs.co/api/v1/'

export default function App() {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    fetch(`${urlBase}categories`)
      .then(response => response.json())
      .then(data => {
        setCategories(data)
      });
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/home" element={<Hero />} />
            <Route path="/products" element={<Products categories={categories} />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}
