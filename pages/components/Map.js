import React, { useEffect } from 'react'
import tw from 'tailwind-styled-components'
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken =
  'pk.eyJ1IjoidGFyZWtqYW1hbi1sYWJ1IiwiYSI6ImNrdnAyYjVwZzNyMHcydm1samhlZXluemQifQ.xlJdRgw8qDSUfhghtSgeVw'

const Map = (props) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-99.290111, 39.39172],
      zoom: 3,
    })
    if (props.pickUpCoordinates) {
      addToMap(map, props.pickUpCoordinates)
    }

    if (props.dropOffCoordinates) {
      addToMap(map, props.dropOffCoordinates)
    }

    if (props.pickUpCoordinates && props.dropOffCoordinates) {
      map.fitBounds([props.pickUpCoordinates, props.dropOffCoordinates], {
        padding: 60,
      })
    }
  }, [props.pickUpCoordinates, props.dropOffCoordinates])

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map)
  }

  return <Wrapper id='map'></Wrapper>
}

export default Map

const Wrapper = tw.div`
  bg-gray-200 flex-1
`
