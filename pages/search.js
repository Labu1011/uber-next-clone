import React, { useState } from 'react'
import tw from 'tailwind-styled-components'
import Link from 'next/link'

const search = () => {
  const [pickUp, setPickUp] = useState('')
  const [dropOff, setDropOff] = useState('')

  return (
    <Wrapper>
      <ButtonContainer>
        <Link href='/'>
          <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png' />
        </Link>
      </ButtonContainer>
      <InputContainer>
        <FromToIcons>
          <Circle src='https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png' />
          <Line src='https://img.icons8.com/ios/50/9CA3AF/vertical-line.png' />
          <Square src='https://img.icons8.com/windows/50/000000/square-full.png' />
        </FromToIcons>
        <InputBoxes>
          <Input
            placeholder='Enter pickup location'
            value={pickUp}
            onChange={(e) => setPickUp(e.target.value)}
          />
          <Input
            placeholder='Where to?'
            value={dropOff}
            onChange={(e) => setDropOff(e.target.value)}
          />
        </InputBoxes>
        <PlusIcon src='https://img.icons8.com/ios/50/000000/plus-math.png' />
      </InputContainer>
      <SavedPlaces>
        <StarIcon src='https://img.icons8.com/ios-filled/50/ffffff/star--v1.png' />
        Saved Places
      </SavedPlaces>
      <Link
        href={{
          pathname: '/confirm',
          query: {
            pickup: pickUp,
            dropoff: dropOff,
          },
        }}
      >
        <ConfirmBtnContainer>
          <ConfirmLocation>Confirm Locations</ConfirmLocation>
        </ConfirmBtnContainer>
      </Link>
    </Wrapper>
  )
}

export default search

const Wrapper = tw.div`
    bg-gray-100 h-screen
`

const ButtonContainer = tw.div`
    bg-white p-4
`

const BackButton = tw.img`
    h-8 cursor-pointer
`
const InputContainer = tw.div`
    bg-white flex items-center gap-x-3 px-4 pb-3
`
const FromToIcons = tw.div`
    w-10 flex flex-col items-center
`

const Circle = tw.img`
    h-2.5
`
const Line = tw.img`
    h-10
`
const Square = tw.img`
    h-3
`

const InputBoxes = tw.div`
flex flex-col flex-1
`
const Input = tw.input`
    bg-gray-100 h-10 my-2 p-2 rounded-md outline-none border-none
`

const PlusIcon = tw.img`
    h-8 w-8 bg-gray-100 rounded-full
`

const SavedPlaces = tw.div`
    bg-white mt-4 px-4 py-3 flex items-center gap-3
`

const StarIcon = tw.img`
    bg-gray-200 h-10 rounded-full p-2

`
const ConfirmBtnContainer = tw.div`
    w-full flex justify-center px-3
`

const ConfirmLocation = tw.button`
    mt-4 bg-gray-800 flex-1 text-gray-100 py-3 rounded-md
`
