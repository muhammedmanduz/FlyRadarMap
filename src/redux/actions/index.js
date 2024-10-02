import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/index";
import axios from "axios";

export const getFligths = createAsyncThunk("flight/getFligths", async () => {
  //parametreleri belirleme
  const params = {
    bl_lat: "34.480238",
    bl_lng: "24.594651",
    tr_lat: "43.914447",
    tr_lng: "47.662137",
  };

  //api isteği
  const res = await api.get("flights/list-in-boundary", { params });

  //api'den gelen dizi içerisindeki dizileri proje  içerisinde kullanımının daha kolay olması için nesneye çevir
  const formatted = res.data.aircraft.map((item) => ({
    id: item[0],
    code: item[1],
    lat: item[2],
    lng: item[3],
  }));

  //aksiyonun payloadını belirle
  return formatted;
});

export const getInfo = createAsyncThunk("info/getInfo", async (id) => {
  //apiden uçuş detaylarını al
  const res = await api.get(`flights/detail?flight=${id}`);

  //aksiyonun payloadını return et
  return res.data;
});
