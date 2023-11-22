import {Component} from 'react'
import {Link} from 'react-router-dom'
import NavBar from '../NavBar'
import MovieDetails from '../MovieDetails'
import './index.css'

class Home extends Component {
  state = {movieDetails: []}

  componentDidMount() {
    this.getMovies()
  }

  getMovies = async () => {
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=288e7e2d1a939082485ac7cad33db714&language=en-US&page=1',
    )
    const data = await response.json()
    if (response.ok) {
      this.setState({movieDetails: data.results})
    }
  }

  onClickDetails = id => <MovieDetails movieId={id} />

  render() {
    const {movieDetails} = this.state
    console.log(movieDetails)
    return (
      <div>
        <NavBar />
        <div>
          <ul className="list">
            {movieDetails.map(each => (
              <li key={each.id}>
                <h1>{each.title}</h1>
                <p>{each.vote_average}</p>
                <button
                  onClick={() => this.onClickDetails(each.id)}
                  type="button"
                >
                  View Details
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Home
