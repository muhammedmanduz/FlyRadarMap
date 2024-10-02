import axios from "axios";

 const api = axios.create({
  baseURL: "https://flight-radar1.p.rapidapi.com",
  
  headers: {
    'x-rapidapi-key': 'c02171dccamshc9d34be56b653cap167ddcjsnb444fd47924d',
    'x-rapidapi-host': 'flight-radar1.p.rapidapi.com'
  }
});

export default api;


