import React, { Component } from 'react';
import '../../src/News.css'
import axios from 'axios'
import { Card, CardColumns } from 'react-bootstrap'

class Technology extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tech: []
    }
  }

  componentDidMount() {
    const BaseUrl = 'https://newsapi.org/'
    const Country = 'id'
    const Category = 'Technology'
    const api_key = 'c31e43dfbba24714bc1ea406af143343'
    axios.get(`${BaseUrl}/v2/top-headlines?country=${Country}&category=${Category}&apiKey=${api_key}`)
      .then(Res => {
        const tech = Res.data.articles
        this.setState({
          tech
        })
        console.log(Res.data.articles);
      })
  }

  render() {
    const { tech } = this.state
    document.title = 'Technology'
    return (
       <div className="container">
        <CardColumns>
        {
          tech.length > 0 ? tech.map(articles => {
            const { title, url, urlToImage } = articles
            return (
                <Card key="index" className="card">
                  <Card.Img variant="top" src={urlToImage} />
                  <Card.Body>
                  <Card.Title className="cardtitle">
                    <a href={url} className="href" target="blank_">
                      {title}
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

export default Technology;