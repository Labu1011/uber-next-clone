import React, { useState, useEffect } from 'react'
import tw from 'tailwind-styled-components'
import { carList } from '../data/carList'

const RideSelector = ({ pickUpCoordinates, dropOffCoordinates }) => {
  const [rideDuration, setRideDuration] = useState(0)

  useEffect(() => {
    fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickUpCoordinates[0]},${pickUpCoordinates[1]};${dropOffCoordinates[0]},${dropOffCoordinates[1]}?access_token=pk.eyJ1IjoidGFyZWtqYW1hbi1sYWJ1IiwiYSI6ImNrdnAyYjVwZzNyMHcydm1samhlZXluemQifQ.xlJdRgw8qDSUfhghtSgeVw`
    )
      .then((res) => res.json())
      .then((data) => {
        setRideDuration(data.routes[0].duration / 100)
      })
  }, [pickUpCoordinates, dropOffCoordinates])

  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more</Title>
      <CarList>
        {carList.map((car, index) => (
          <Car key={index}>
            <CarImage src={car.imgUrl} />
            <CarDetails>
              <Service>{car.service}</Service>
              <Time>5 min away</Time>
            </CarDetails>
            <Price>{'$' + (rideDuration * car.multiplier).toFixed(2)}</Price>
          </Car>
        ))}
      </CarList>
    </Wrapper>
  )
}

export default RideSelector

const Wrapper = tw.div`
    flex-1 h-1/2 flex flex-col
`
const Title = tw.div`
    text-sm text-gray-500 text-center border-b border-gray-200 py-2
`
const CarList = tw.div`
    overflow-y-scroll
`
const Car = tw.div`
    flex items-center px-4 py-2 gap-x-4
`
const CarImage = tw.img`
    h-14
`
const CarDetails = tw.div`
    flex-1
`
const Service = tw.div`
    text-md
`
const Time = tw.div`
    text-xs text-blue-500
`
const Price = tw.div`
    text-sm
`
