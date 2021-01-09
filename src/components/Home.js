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
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://www.news.developeridn.com"

    axios.get(proxyurl + url)
      .then(Res => {
        const news = Res.data.data
        this.setState({
          news
        })
      })
      .catch(Error => {
        console.log(Error);
      })
  }
  render() {
    document.title = 'News'
    return (
      <section className="feed" id="feed">
        <div className="tiles" aria-live="polite">
          {this.state.news.map((item, index) => {
            return (
              <div className="tile fade-in" key={index}>
                <span className="count">{index + 1}</span>
                <a href={item.link} className="href" target="blank_"><h2>{item.judul}</h2></a>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Home;