import { Link, useMatch } from "react-router-dom"

const Navigation = () => {
  const homeMatch = useMatch("/")
  const memoMatch = useMatch("/memo")

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/" className={homeMatch? 'activeLink' : ''}>Home</Link>
          </li>
          <li>
            <Link to="/memo" className={memoMatch? 'activeLink' : ''}>Memo</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navigation