import OptimizedComponent from '../../use-useCallback/OptimizedComponent'
import SearchParamsComponent from '../../use-useSearchParams/SearchParamsComponent'

const HomePage = () => {

  return (
    <div>
      <h1>Home Page</h1>
      <SearchParamsComponent />
      <hr/>
      <OptimizedComponent/>
    </div>
  )

}

export default HomePage