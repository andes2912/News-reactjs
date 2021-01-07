import React, { Component } from 'react';
import '../../src/News.css'
import axios from 'axios'

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      news: []
    }
  }

  componentDidMount() {
    axios.get(`/nasional`)
      .then(Res => {
        const news = Res.data.data
        this.setState({
          news
        })
      })
  }
  render() {
    document.title = 'News'
    return (
      <section className="feed" id="feed">
        <div className="tiles" aria-live="polite">
          {this.state.news.slice(0, this.state.visible).map((item, index) => {
            return (
              <div className="tile fade-in" key={index}>
                <span className="count">{index + 1}</span>
                <a href={item.link} className="href" target="blank_"><h2>{item.judul}</h2></a>
              </div>
            );
          })}
        </div>
        {
          this.state.visible < this.state.news.length &&
          <button onClick={this.IncrementItem} type="button" className="load-more">Load more</button>
        }

      </section>
    );
  }
}

export default Home;