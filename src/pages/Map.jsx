import { MapContainer, Marker, Polyline, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useDispatch, useSelector } from "react-redux";
import { icon } from "leaflet";
import { clearRoute } from "../redux/slices/infoSlice";




const Map = ({ setDetailId}) => {

  const {  flights } = useSelector((store) => store.flights);
 const {route}= useSelector((store) =>store.info)
;

const dispatch=useDispatch();

  //marker için kendi iconumuzu oluşturalım
  const planeIcon = icon({
    iconUrl: 'plane_icon.jpg',
    iconSize: [30, 30],
});

  return (
    <MapContainer
      center={[39.197953, 35.412556]}
      zoom={6}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {flights.map((fligth) => (
        <Marker 
        key={fligth.id}
        position={[fligth.lat, fligth.lng]} 
        icon={planeIcon}>
          <Popup>
            <div className="popup">
              <span>Kod: {fligth.code}</span>
              <button onClick={()=>setDetailId(fligth.id)}>Detay</button>
              
              <button onClick={()=>dispatch(clearRoute())}>Rotayı Temizle</button>
            </div>

          </Popup>
        </Marker>
      ))}

      {route && <Polyline positions={route}/>}
    </MapContainer>
  );
};

export default Map;
