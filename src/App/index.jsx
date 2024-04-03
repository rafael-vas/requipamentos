import "./style.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useEffect, useState } from "react";

import Home from "../pages/Home";
import Contato from "../pages/Contato";
import Equipamentos from "../pages/Equipamentos";
import NoPage from "../pages/NoPage";
import MeuCarrinho from "../pages/MeuCarrinho";
import Orcamento from "../pages/Orcamento";

function App() {

  const storedCount = JSON.parse(localStorage.getItem('count'));
  const storedInfo = JSON.parse(localStorage.getItem('info'));


  function handleAddCount(id, name, code, imgSrc, value = 1) {
    const newInfo = {id: id, name: name, code: code, imgSrc: imgSrc, quantity: value};

    setInfo((info) => [...info, newInfo])
    setCount((count)=> count + 1)

  }

  const [count, setCount] = useState(storedCount ? storedCount : 0);
  const [info, setInfo] = useState(storedInfo ? storedInfo : [{
    id: null, name: "", code: "", imgSrc: "", quantity: 0,
  }]);

  useEffect(() => {

    localStorage.setItem('count', JSON.stringify(count));
    localStorage.setItem('info', JSON.stringify(info));

  }, [count, info])

  return (


    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={<Home count={count} handleAddCount={handleAddCount}/>}>
          </Route>

          <Route
            path="/home"
            element={<Home count={count} handleAddCount={handleAddCount}/>}>
          </Route>

          <Route
            path="/equipamentos"
            element={<Equipamentos handleAddCount={handleAddCount} count={count}/>}>
          </Route>

          <Route
            path="/contato" element={<Contato count={count} />}>
          </Route>

          <Route
            path="/meu-carrinho"
            element={<MeuCarrinho count={count}
            setCount={setCount} info={info} setInfo={setInfo} />}>
          </Route>

          <Route
            path="/orcamento"
            element={<Orcamento count={count} info={info} />}>
          </Route>

          <Route
            path="*"
            element={<NoPage count={count} />}>
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
