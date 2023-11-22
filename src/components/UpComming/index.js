import {Component} from 'react'
import NavBar from '../NavBar'
import './index.css'

class UpComming extends Component {
  state = {movies: []}

  componentDidMount() {
    this.getMovies()
  }

  getMovies = async () => {
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/upcoming?api_key=288e7e2d1a939082485ac7cad33db714&language=en-US&page=1',
    )
    const data = await response.json()
    this.setState({movies: data.results})
  }

  render() {
    const {movies} = this.state
    console.log(movies)
    return (
      <div>
        <NavBar />
        <div>
          <ul className="list">
            {movies.map(each => (
              <li key={each.id}>
                <h1>{each.title}</h1>
                <img
                  className="poster"
                  src={`https://image.tmdb.org/t/p/original/${each.poster_path}`}
                  alt={each.title}
                />
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

export default UpComming
