import React, { Component } from 'react';
import '../../src/News.css'
import axios from 'axios'

class Technology extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tech: []
    }
  }

  componentDidMount() {

    const proxyurl = "https://cors-anywhere.herokuapp.com/"
    const url = "https://www.news.developeridn.com/teknologi"

    axios.get(proxyurl + url)
      .then(Res => {
        const tech = Res.data.data
        this.setState({
          tech
        })
      })
  }

  render() {
    document.title = 'Technology'
    return (
      <section className="feed" id="feed">
        <div className="tiles" aria-live="polite">
          {this.state.tech.slice(0, this.state.visible).map((item, index) => {
            return (
              <div className="tile fade-in" key={index}>
                <span className="count">{index + 1}</span>
                <a href={item.link} className="href" target="blank_"><h2>{item.judul}</h2></a>
              </div>
            );
          })}
        </div>
        {
          this.state.visible < this.state.tech.length &&
          <button onClick={this.IncrementItem} type="button" className="load-more">Load more</button>
        }

      </section>
    );
  }
}

export default Technology;