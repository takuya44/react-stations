// DO NOT DELETE
import './App.css'
import { Header } from './Header'
import { Description } from './Description'
import { DogListContainer } from './DogListContainer'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  return (
    <div>
      {/* ヘッダー */}
      <Header />
      {/* サイトの説明・犬の画像・更新ボタン */}
      <Description />
      <DogListContainer />
    </div>
  )
}
