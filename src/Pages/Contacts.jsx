import React from 'react'
import './CSS/Contacts.css'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerIconShadow from 'leaflet/dist/images/marker-shadow.png'

const customIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerIconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

const Contacts = () => {
    const initialPosition = [36.59792, -119.4588] // Example coordinates for London
    const zoomLevel = 15
  return (
    <section id='contact-us'>
      <div class='contact-container'>
        <div class='cont-left'>
          <div class='left-text'>
            <img src='/img/main-icon.svg' alt='' />
            <h3>youremail@gmail.com</h3>
          </div>
          <div class='left-text'>
            <img src='/img/location-icon.svg' alt='' />
            <h3>Your location - Abcd, US, 12039</h3>
          </div>
          
          <MapContainer
            id='map'
            center={initialPosition}
            zoom={zoomLevel}
          >
            <TileLayer
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={initialPosition} icon={customIcon}>
              <Popup>
                A pretty popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
          
        </div>
        <div class='cont-right'>
          <h1>CONTACT US</h1>
          <input type='text' placeholder='Name' />
          <input type='text' placeholder='Email' />
          <textarea placeholder='Message'></textarea>
          <button>Submit</button>
        </div>
      </div>
    </section>
  )
}

export default Contacts