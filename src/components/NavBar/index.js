import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class NavBar extends Component {
  state = {search: ''}

  onChangeEvent = e => {
    this.setState({search: e.target.value})
  }

  render() {
    const {search} = this.state
    return (
      <nav>
        <div className="nav">
          <h1>movieDB</h1>
          <div className="nav">
            <ul className="nav-items">
              <Link to="/">
                <li>
                  <button>Popular Movies Page</button>
                </li>
              </Link>
              <Link to="/top-rated">
                <li>
                  <button>Top Rated Movies Page</button>
                </li>
              </Link>
              <Link to="/upcoming">
                <li>
                  <button>Upcoming Movies Page</button>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <input type="text" />
        <button type="button">Search</button>
      </nav>
    )
  }
}

export default NavBar
