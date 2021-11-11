import React, { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import Map from './components/Map'
import { useRouter } from 'next/router'
import RideSelector from './components/RideSelector'
import Link from 'next/link'

const Confirm = () => {
  const router = useRouter()
  const { pickup, dropoff } = router.query

  const [pickUpCoordinates, setPickUpCoordinates] = useState([0, 0])
  const [dropOffCoordinates, setDropOffCoordinates] = useState([0, 0])

  const getPickUpCoordinates = (pickup) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            'pk.eyJ1IjoidGFyZWtqYW1hbi1sYWJ1IiwiYSI6ImNrdnAyYjVwZzNyMHcydm1samhlZXluemQifQ.xlJdRgw8qDSUfhghtSgeVw',
          limit: 1,
        })
    )
      .then((res) => res.json())
      .then((data) => setPickUpCoordinates(data.features[0].center))
  }

  const getDropOffCoordinates = (dropoff) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            'pk.eyJ1IjoidGFyZWtqYW1hbi1sYWJ1IiwiYSI6ImNrdnAyYjVwZzNyMHcydm1samhlZXluemQifQ.xlJdRgw8qDSUfhghtSgeVw',
          limit: 1,
        })
    )
      .then((res) => res.json())
      .then((data) => setDropOffCoordinates(data.features[0].center))
  }

  useEffect(() => {
    getPickUpCoordinates(pickup)
    getDropOffCoordinates(dropoff)
  }, [pickup, dropoff])

  return (
    <Wrapper>
      <ButtonContainer>
        <Link href='/search'>
          <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png' />
        </Link>
      </ButtonContainer>
      <Map
        pickUpCoordinates={pickUpCoordinates}
        dropOffCoordinates={dropOffCoordinates}
      />
      <RideContainer>
        <RideSelector
          pickUpCoordinates={pickUpCoordinates}
          dropOffCoordinates={dropOffCoordinates}
        />

        <ConfirmButtonContainer>
          <ConfirmButton>Confirm UberX</ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  )
}

export default Confirm

const Wrapper = tw.div`
   flex flex-col h-screen
`
const RideContainer = tw.div`
    flex flex-col flex-1 h-1/2
`

const ConfirmButtonContainer = tw.div`
  w-full bg-white px-4 flex justify-center border-t border-gray-200
`
const ConfirmButton = tw.button`
mt-4 bg-gray-800 flex-1 text-gray-100 py-3 rounded-md
`
const ButtonContainer = tw.div`
  absolute top-4 left-4 rounded-full z-10 bg-white shadow-lg cursor-pointer
`

const BackButton = tw.img`
  h-8 object-contain
`
