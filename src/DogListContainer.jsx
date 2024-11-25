// @ts-check

import { useEffect, useState } from 'react'
import BreedsSelect from './BreedsSelect'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]) // 犬種の一覧を管理するstate
  const [selectedBreed, setSelectedBreed] = useState('affenpinscher') // 選択された犬種を管理するstate
  const [images, setImages] = useState([]) // 犬種の画像を管理するstate

  useEffect(() => {
    fetchBreeds()
  }, [])

  // 犬種の一覧を取得する関数
  const fetchBreeds = async () => {
    const res = await fetch('https://dog.ceo/api/breeds/list/all')
    const data = await res.json()
    const breeds = Object.keys(data.message)
    setBreeds(breeds)
  }

  // 選択された犬種の画像を取得する関数
  const fetchImages = async () => {
    try {
      const res = await fetch(
        `https://dog.ceo/api/breed/${selectedBreed}/images/random/6`,
      )
      const data = await res.json()
      setImages(data.message) // APIから取得した画像URLリストを状態に保存
    } catch (error) {
      console.error('画像の取得に失敗しました', error)
    }
  }

  return (
    <>
      <div className="container dog-list-container">
        <BreedsSelect
          breeds={breeds}
          selectedBreed={selectedBreed}
          setSelectedBreed={setSelectedBreed}
          fetchImages={fetchImages}
          images={images}
        />
      </div>
    </>
  )
}

export default DogListContainer
