import { useEffect } from "react";
import "./App.css";
import DataTable from "./components/table/DataTable.jsx";
import axios from "axios";


function App() {

  const getProducts = async () => {
    const URL_PRODUCTS = 'https://dripstore-api-207u.onrender.com/api/produto'
  try {
    const result = await axios.get(URL_PRODUCTS)
    console.log(result);
  } catch (error) {
    console.log(`Erro ao buscar o produto: ${error}`);
  }
};

useEffect(() => {
  getProducts()
}, []);

  return (
    <>
      <DataTable />
    </>
  );
}

export default App;
