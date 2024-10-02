import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Map from "./pages/Map";
import List from "./pages/List";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import { useDispatch } from "react-redux";
import { getFligths } from "./redux/actions";
import Modal from "./components/Modal";



const App = () => {
  //detayı gösterilecek uçuşun id'si
  const [detailId, setDetailId] = useState(null);

  const dispatch = useDispatch();

  //tr sınırları içerisindeki uçuşları al ve store a aktar
  useEffect(() => {
    dispatch(getFligths());
  }, []);

  return (
    <BrowserRouter>
      <Header />

      <Buttons />
      
      <Routes>
        <Route path="/" element={<Map setDetailId={setDetailId} />} />
        <Route path="/list" element={<List setDetailId={setDetailId} />} />
      </Routes>
      {/* detay id stateinde eleman varsa ekrana modal bas */}
      {detailId && <Modal id={detailId} close={()=>setDetailId(null)} />}
    </BrowserRouter>
  );
};

export default App;
