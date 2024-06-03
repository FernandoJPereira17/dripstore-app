import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DataTable from "./components/table/DataTable.jsx";


function App() {
  const getProductos = async () => {
    const URL_PRODUCTS = 'https://dripstore-api-0r61.onrender.com'
  try {
    const result = await axios.get(URL_PRODUCTS)
    console.log(result);
  } catch (error) {
    console.log(`Erro ao buscar o produto: ${error}`);
  }
};

useEffect(() => {}, []);

  return (
    <>
      <DataTable />
    </>
  );
}

export default App;
