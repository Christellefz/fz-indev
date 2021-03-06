import './Map.css'

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const Map = () => {
  const location = { lat: 43.8073, lng: 4.6437 }
  const containerStyle = {
    width: '250px',
    height: '400px',
    border: '2px solid  black'
  }

  const center = {
    lat: 43.8073,
    lng: 4.6437
  }

  return (
    <div className='mapContainer'>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_MAP_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          <Marker key={'myloc'} position={location} />
          <></>
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default Map
