import React, { Component } from 'react';
import '../../src/News.css'
import axios from 'axios'

class Wincamp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      visible: 10,
      pages: 1,
      error: false
    }

    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    this.setState((prev) => {
      return {visible: prev.visible + 1};
    });
  }

  IncrementItem = () => {
    this.setState({ pages: this.state.pages + 1 });
  }

  componentDidMount() {
    const page = this.state.pages

    axios.get(`https://wincamp.org/wp-json/wp/v2/posts?page=${page}` )
      .then(Res => {
        const items = Res.data
        this.setState({
          items
        })
        console.log(Res.data);
      })

  }
  render() {
    document.title = 'Wincamp'
    return (
      <section className="feed" id="feed">
        <div className="tiles" aria-live="polite">
          {this.state.items.slice(0, this.state.visible).map((item, index) => {
            return (
              <div className="tile fade-in" key={item.id}>
                <span className="count">{index + 1}</span>
                <a href={item.link} className="href" target="blank_"><h2>{item.title.rendered}</h2></a>
              </div>
            );
          })}
        </div>
        {
          this.state.visible < this.state.items.length &&
          <button onClick={this.IncrementItem} type="button" className="load-more">Load more</button>
        }

      </section>
    );
  }
}

export default Wincamp;