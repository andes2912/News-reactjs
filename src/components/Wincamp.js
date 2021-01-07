import React, { Component } from 'react';
import '../../src/Wincamp.css'
import axios from 'axios'
import { Card, CardColumns } from 'react-bootstrap'

class Wincamp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      visible: 2,
      error: false
    }

    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    this.setState((prev) => {
      return {visible: prev.visible + 2};
    });
  }

  componentDidMount() {
    axios.get('https://wincamp.org/wp-json/wp/v2/posts')
      .then(Res => {
        const items = Res.data
        this.setState({
          items
        })
        console.log(Res.data);
      })

  }

  render() {
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
        {this.state.visible < this.state.items.length &&
          <button onClick={this.loadMore} type="button" className="load-more">Load more</button>
        }
      </section>
    );
  }
}

export default Wincamp;