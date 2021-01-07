import React, { Component } from 'react';
import '../../src/News.css'
import axios from 'axios'
import { Card, CardColumns } from 'react-bootstrap'

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      news: []
    }
  }

  componentDidMount() {
    const BaseUrl = 'https://newsapi.org/'
    const Country = 'id'
    const Category = ''
    const api_key = 'c31e43dfbba24714bc1ea406af143343'
    axios.get(`${BaseUrl}/v2/top-headlines?country=${Country}&category=${Category}&apiKey=${api_key}`)
      .then(Res => {
        const news = Res.data.articles
        this.setState({
          news
        })
      })
  }
  render() {
    const { news } = this.state
    document.title = 'News'
    return (
      <div className="container">
        <CardColumns>
        {
          news.length > 0 ? news.map((articles, index) => {
            const { title, url, urlToImage } = articles
            return (
                <Card key={index} className="card">
                  <Card.Img variant="top" src={urlToImage} />
                  <Card.Body>
                  <Card.Title className="cardtitle">
                    <a href={url} className="href" target="blank_">
                      {title} <br />
                    </a>
                  </Card.Title>
                  </Card.Body>
                </Card>
            );
          }) : null
        }
        </CardColumns>
      </div>
    );
  }
}

export default Home;