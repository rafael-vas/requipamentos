import "./style.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useEffect, useState } from "react";

import Home from "../pages/Home";
import Contato from "../pages/Contato";
import Equipamentos from "../pages/Equipamentos";
import NoPage from "../pages/NoPage";

import { register } from "swiper/element/bundle";
register();

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import MeuCarrinho from "../pages/MeuCarrinho";

function App() {

  const storedCount = JSON.parse(localStorage.getItem('count'));
  const storedInfo = JSON.parse(localStorage.getItem('info'));
  // const storedCount = null;
  // const storedInfo = null;


  function handleAddCount(id, name, code, imgSrc, value = 1) {
    const newInfo = {id: id, name: name, code: code, imgSrc: imgSrc, quantity: value};

    // console.log(info.find(newInfo))

    setInfo((info) => [...info, newInfo])
    setCount((count)=> count + 1)


  }

  const [count, setCount] = useState(storedCount ? storedCount : 0);
  const [info, setInfo] = useState(storedInfo ? storedInfo : [{
    id: null, name: "", code: "", imgSrc: "", quantity: 0,
  }]);

  // console.log(storedCount)
  // console.log(storedInfo)

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
    localStorage.setItem('info', JSON.stringify(info));
  }, [count, info])

  return (


    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home count={count} onClick={handleAddCount}/>}></Route>

          <Route
            path="/home"
            element={<Home
                        count={count}
                        onClick={handleAddCount}
                    />}
          />

          <Route path="/equipamentos" element={<Equipamentos onClick={handleAddCount} count={count}/>}/>

          <Route path="/contato" element={<Contato count={count} />}/>

          <Route path="/meu-carrinho" element={<MeuCarrinho count={count} setCount={setCount} info={info} setInfo={setInfo} />}/>

          <Route path="*" element={<NoPage count={count} />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
