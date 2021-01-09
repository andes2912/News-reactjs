import React, { Component } from 'react'
import '../../src/News.css'
import axios from 'axios'

export default class Ekonomi extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ekonomi: []
    }
  }

  componentDidMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://www.news.developeridn.com/ekonomi"

    axios.get(proxyurl + url)
      .then(Res => {
        console.log(Res.data.data[0].waktu);
        const ekonomi = Res.data.data
        this.setState({
          ekonomi
        })
      })
      .catch(Error => {
        console.log(Error);
      })
  }
  render() {
    document.title = 'Ekonomi'
    return (
      <div>
        <section className="feed" id="feed">
          <div className="tiles" aria-live="polite">
            {this.state.ekonomi.map((item, index) => {
              return (
                <div className="tile fade-in" key={index}>
                  <span className="count">{index + 1}</span>
                  <a href={item.link} className="href" target="blank_"><h2>{item.judul}</h2></a>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    )
  }
}
