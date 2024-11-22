// @ts-check
import { useState } from 'react'
import DogImage from './DogImage'

export const Description = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg',
  )

  return (
    <>
      <p className="description">犬の画像を表示するサイトです</p>
      {/* 犬の画像 */}
      <DogImage imageUrl={dogUrl} />
      <button
        className="update-button"
        onClick={async () => {
          const res = await fetch('https://dog.ceo/api/breeds/image/random')
          const data = await res.json()
          setDogUrl(data.message)
        }}
      >
        更新
      </button>
    </>
  )
}

export default Description
