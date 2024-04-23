import { useSearchParams } from 'react-router-dom'

const SearchParamsComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  
  const handleClick = () => {
    // ?param=value
    // ?param=value@anotherParam=anotherValue
    setSearchParams({
      param: 'value',
      anotherParam: 'anotherValue'
    })
  }

  return (
    <div>
      <h3>SearchParamsComponent: {JSON.stringify(Array.from(searchParams.entries()))}</h3>
      <button type="button" onClick={handleClick}>Change search Params</button>
    </div>
  )

}

export default SearchParamsComponent

// !2 variant
// import { useSearchParams } from 'react-router-dom'
// function SearchParamsComponent() {
// // Використання useSearchParams для отримання та встановлення параметрів пошуку
// const [searchParams, setSearchParams] = useSearchParams()
// // Отримання значення параметра пошуку 'filter'
// const filter = searchParams.get('filter')
// // Зміна параметра пошуку
// const setFilter = (newFilter) => {
// // Встановлення нового значення для параметра 'filter'
// searchParams.set('filter', newFilter)
// setSearchParams(searchParams)
// }
// return (
// <div>
// <p>Поточний фільтр: {filter}</p>
// <button onClick={() => setFilter('active')}>Активні</button>
// <button onClick={() => setFilter('completed')}>Завершені</button>
// </div>
// )
//}