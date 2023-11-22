import {Component} from 'react'
import './index.css'

class MovieDetails extends Component {
  render() {
    const {movieId} = this.props
    console.log(movieId)
    return (
      <div>
        <h1>Movie</h1>
      </div>
    )
  }
}

export default MovieDetails
