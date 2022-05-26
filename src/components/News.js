import React, { Component } from 'react'
import Newsitem from './Newsitem'



export class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Asma Khan, Sally Clarke and Florence Knight",
            "title": "All together now: six brilliant recipes for meals to share with family and friends",
            "description": "Gobi tamatar, beetroot-marinated salmon, pork chops with rhubarb – perfect dishes to make when there’s more than four of you around the tableThis dish is inspired by the red spinach dish of Bengal. It uses kale as the texture is closest to the hardy red spina…",
            "url": "https://amp.theguardian.com/food/2022/may/22/gobi-tamatar-asma-khan-pork-chops-recipes-florence-knight-dishes-to-share",
            "urlToImage": "https://i.guim.co.uk/img/media/7b3707eaea8d7a2854464aea61465929f5479ea1/0_1759_6192_3715/master/6192.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tZGVmYXVsdC5wbmc&enable=upscale&s=7284233e9ba5b96dbd421eaa423e01ff",
            "publishedAt": "2022-05-22T12:00:48Z",
            "content": "Asma Khans prawns with kale\r\nThis dish is inspired by the red spinach dish of Bengal. It uses kale as the texture is closest to the hardy red spinach we have in Kolkata. I try to substitute Indian ve… [+13924 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Sami Fathi",
            "title": "Apple Increases Apple Music Subscription Price for Students in Several Countries",
            "description": "Apple has silently increased the price of its Apple Music subscription for college students in several countries, with the company emailing students informing them their subscription would be slightly increasing in price moving forward. \n\n\n\n\n\nThe price change…",
            "url": "https://www.macrumors.com/2022/05/22/apple-music-price-increase-for-students/",
            "urlToImage": "https://images.macrumors.com/t/FhOW85qUG3EZBw65R3J6aWTQMFI=/1600x/article-new/2021/08/apple-music.jpg",
            "publishedAt": "2022-05-22T08:57:51Z",
            "content": "Apple has silently increased the price of its Apple Music subscription for college students in several countries, with the company emailing students informing them their subscription would be slightl… [+1014 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xataka.com"
            },
            "author": "Javier Lacort",
            "title": "La muerte del iPod me lo confirmó: hora de repensar nuestra relación con la música",
            "description": "10 de mayo de 2022: el día en que se anunció la muerte oficial del iPod. Un producto icónico, símbolo de una década para la cultura popular, que permitió que luego naciese el iPhone, a la postre el terminal que le despojó de sentido. En medio de todas las cró…",
            "url": "https://www.xataka.com/musica/muerte-ipod-me-confirmo-hora-repensar-nuestra-relacion-musica",
            "urlToImage": "https://i.blogs.es/4e5d96/musica/840_560.jpeg",
            "publishedAt": "2022-05-22T10:00:33Z",
            "content": "10 de mayo de 2022: el día en que se anunció la muerte oficial del iPod. Un producto icónico, símbolo de una década para la cultura popular, que permitió que luego naciese el iPhone, a la postre el t… [+2425 chars]"
        }
    ]
    constructor() {
        super();
        console.log("constructor froms news");
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1


        }
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c9577622df0d4873b896846801178a18&page=1";
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles })

    }

    handleNextClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c9577622df0d4873b896846801178a18&page=${this.state.page + 1}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log("next");


        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
        })

    }
    handlePreviousClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c9577622df0d4873b896846801178a18&page=${this.state.page - 1}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log("Previous");

        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })


    }
    render() {
        return (
            <div className='container my-3'><h1 className='text-center'>News Harry - Top Headlines</h1>
                <div className="row" >
                    {this.state.articles.map((element) => {
                        return <div className="col md-4" key={element.url}>
                            <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageurl={element.urlToImage} newsurl={element.url} />

                        </div>
                    })}



                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&laquo;previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>next&raquo;</button>
                </div>
            </div >
        )
    }
}

export default News