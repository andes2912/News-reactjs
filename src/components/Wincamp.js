import React, { Component } from 'react';
import '../../src/News.css'
import axios from 'axios'
import { Card, CardColumns } from 'react-bootstrap'

class Wincamp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    axios.get('https://wincamp.org/wp-json/wp/v2/posts')
      .then(Res => {
        const items = Res.data
        this.setState({
          items
        })
        // console.log(Res.data);
      })

  }

  render() {
    const { items } = this.state
    document.title = 'Wincamp'
    return (
      <div className="container">
        <CardColumns>
        {
          items.length > 0 ?  items.map((articles, index) => {
            const {title, link, featured_media } = articles
            return (
                <Card key={index} className="card">
                <Card.Img variant="top" src={featured_media}/>
                  <Card.Body>
                  <Card.Title className="cardtitle">
                    <a href={link} className="href" target="blank_">
                      {title.rendered}
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

export default Wincamp;