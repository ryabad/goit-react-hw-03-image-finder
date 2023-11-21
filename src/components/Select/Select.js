import ImageGallery from 'components/ImageGallery/ImageGallery';
import OptionItem from './OptionItem';
import fetchSearchQuery from 'services/pixabay';

const { Component } = require('react');

class Select extends Component {
  state = {
    query: '',
    images: null,
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  componentDidMount(prevProps, prevState) {
    fetchSearchQuery(this.state.query, 1)
      .then(response => {
        if (response.data.total !== 0) {
          this.setState(prevState => ({
            images: [...response.data.hits],
          }));
        }
      })
      .catch(error => console.log(error));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      fetchSearchQuery(this.state.query, 1)
        .then(response => {
          if (response.data.total !== 0) {
            this.setState(prevState => ({
              images: [...response.data.hits],
            }));
          }
        })
        .catch(error => console.log(error));
    }
  }

  render() {
    return (
      <>
        <label>
          Choose query
          <select
            name="query"
            value={this.state.query}
            onChange={this.handleChange}
          >
            <OptionItem />
          </select>
        </label>
        {this.state.images && <ImageGallery data={this.state.images} />}
      </>
    );
  }
}

export default Select;
