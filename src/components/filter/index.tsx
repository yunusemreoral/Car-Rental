import { FC } from "react"
import SearchBar from "./searchbar"
import Year from "./year"

const Filter:FC = () => {
  return (
    <div className='mt-12 padding-x padding-y max-width'>
      <div className='home-text-container'>
        <h1 className='text-4xl font-extrabold'>Araba Kataloğu</h1>
        <p>Beğenebileceğin arabaları keşfet</p>
      </div>

      <div className='home-filters'></div>
      <SearchBar/>

      <div className="home-filter-container"></div>
      <Year/>
    </div>
  )
}

export default Filter
