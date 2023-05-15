import React, { useEffect, useState } from 'react'
import ApiService from '../services/ApiService'
import App from '../App'
import { Link } from 'react-router-dom'
import like from '../assets/img/core-img/like.png'
import chat from '../assets/img/core-img/chat.png'
import img12 from '../assets/img/bg-img/12.jpg'
import img13 from '../assets/img/bg-img/13.jpg'
import img14 from '../assets/img/bg-img/14.jpg'
import img15 from '../assets/img/bg-img/15.jpg'
import img16 from '../assets/img/bg-img/16.jpg'
import img17 from '../assets/img/bg-img/17.jpg'
import img18 from '../assets/img/bg-img/18.jpg'
import img19 from '../assets/img/bg-img/19.jpg'
import img20 from '../assets/img/bg-img/20.jpg'
import img21 from '../assets/img/bg-img/21.jpg'
import img22 from '../assets/img/bg-img/22.jpg'
import img23 from '../assets/img/bg-img/23.jpg'
import img24 from '../assets/img/bg-img/24.jpg'

const Articles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const response = ApiService.articles()
        // Handle successful article retrieval
        response.then(setArticles(response.data))
            // Handle article retrieval error
            .catch(error => console.log(error.response.data))
    }, [])

    const [preferences, setPreferences] = useState({
        category: '',
        source: '',
        author: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const response = ApiService.preferences(preferences);
        // Handle successful preferences update
        response.then(console.log(response.data))
            // Handle preferences update error
            .catch(error => console.log(error.response.data))
    };

    return (
        <App>
            <div>
                <h2>Articles</h2>
                {articles?.map((article) => (
                    <div key={article.id}>
                        <h3>{article.title}</h3>
                        <p>{article.description}</p>
                    </div>
                ))}
            </div>


            <div className="featured-post-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-8">
                            <div className="row">

                                <div className="col-12 col-lg-7">
                                    <div className="single-blog-post featured-post">
                                        <div className="post-thumb">
                                            <Link to="/"><img src={img16} alt="" /></Link>
                                        </div>
                                        <div className="post-data">
                                            <Link to="/" className="post-catagory">Finance</Link>
                                            <Link to="/" className="post-title">
                                                <h6>Financial news: A new company is born today at the stock market</h6>
                                            </Link>
                                            <div className="post-meta">
                                                <p className="post-author">By <Link to="/">Christinne Williams</Link></p>
                                                <p className="post-excerp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet odio sodales placerat. Sed varius leo ac leo fermentum, eu cursus nunc maximus. Integer convallis nisi nibh, et ornare neque ullamcorper ac. Nam id congue lectus, a venenatis massa. Maecenas justo libero, vulputate vel nunc id, blandit feugiat sem. </p>

                                                <div className="d-flex align-items-center">
                                                    <Link to="/" className="post-like"><img src={like} alt="" /> <span>392</span></Link>
                                                    <Link to="/" className="post-comment"><img src={chat} alt="" /> <span>10</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-5">

                                    <div className="single-blog-post featured-post-2">
                                        <div className="post-thumb">
                                            <Link to="/"><img src={img17} alt="" /></Link>
                                        </div>
                                        <div className="post-data">
                                            <Link to="/" className="post-catagory">Finance</Link>
                                            <div className="post-meta">
                                                <Link to="/" className="post-title">
                                                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet odio sodales placerat. Sed varius leo ac...</h6>
                                                </Link>

                                                <div className="d-flex align-items-center">
                                                    <Link to="/" className="post-like"><img src={like} alt="" /> <span>392</span></Link>
                                                    <Link to="/" className="post-comment"><img src={chat} alt="" /> <span>10</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="single-blog-post featured-post-2">
                                        <div className="post-thumb">
                                            <Link to="/"><img src={img18} alt="" /></Link>
                                        </div>
                                        <div className="post-data">
                                            <Link to="/" className="post-catagory">Finance</Link>
                                            <div className="post-meta">
                                                <Link to="/" className="post-title">
                                                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet odio sodales placerat. Sed varius leo ac...</h6>
                                                </Link>

                                                <div className="d-flex align-items-center">
                                                    <Link to="/" className="post-like"><img src={like} alt="" /> <span>392</span></Link>
                                                    <Link to="/" className="post-comment"><img src={chat} alt="" /> <span>10</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">

                            <div className="single-blog-post small-featured-post d-flex">
                                <div className="post-thumb">
                                    <Link to="/"><img src={img19} alt="" /></Link>
                                </div>
                                <div className="post-data">
                                    <Link to="/" className="post-catagory">Finance</Link>
                                    <div className="post-meta">
                                        <Link to="/" className="post-title">
                                            <h6>Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.</h6>
                                        </Link>
                                        <p className="post-date"><span>7:00 AM</span> | <span>April 14</span></p>
                                    </div>
                                </div>
                            </div>

                            <div className="single-blog-post small-featured-post d-flex">
                                <div className="post-thumb">
                                    <Link to="/"><img src={img20} alt="" /></Link>
                                </div>
                                <div className="post-data">
                                    <Link to="/" className="post-catagory">Politics</Link>
                                    <div className="post-meta">
                                        <Link to="/" className="post-title">
                                            <h6>Sed a elit euismod augue semper congue sit amet ac sapien.</h6>
                                        </Link>
                                        <p className="post-date"><span>7:00 AM</span> | <span>April 14</span></p>
                                    </div>
                                </div>
                            </div>

                            <div className="single-blog-post small-featured-post d-flex">
                                <div className="post-thumb">
                                    <Link to="/"><img src={img21} alt="" /></Link>
                                </div>
                                <div className="post-data">
                                    <Link to="/" className="post-catagory">Health</Link>
                                    <div className="post-meta">
                                        <Link to="/" className="post-title">
                                            <h6>Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.</h6>
                                        </Link>
                                        <p className="post-date"><span>7:00 AM</span> | <span>April 14</span></p>
                                    </div>
                                </div>
                            </div>

                            <div className="single-blog-post small-featured-post d-flex">
                                <div className="post-thumb">
                                    <Link to="/"><img src={img22} alt="" /></Link>
                                </div>
                                <div className="post-data">
                                    <Link to="/" className="post-catagory">Finance</Link>
                                    <div className="post-meta">
                                        <Link to="/" className="post-title">
                                            <h6>Augue semper congue sit amet ac sapien. Fusce consequat.</h6>
                                        </Link>
                                        <p className="post-date"><span>7:00 AM</span> | <span>April 14</span></p>
                                    </div>
                                </div>
                            </div>

                            <div className="single-blog-post small-featured-post d-flex">
                                <div className="post-thumb">
                                    <Link to="/"><img src={img23} alt="" /></Link>
                                </div>
                                <div className="post-data">
                                    <Link to="/" className="post-catagory">Travel</Link>
                                    <div className="post-meta">
                                        <Link to="/" className="post-title">
                                            <h6>Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.</h6>
                                        </Link>
                                        <p className="post-date"><span>7:00 AM</span> | <span>April 14</span></p>
                                    </div>
                                </div>
                            </div>

                            <div className="single-blog-post small-featured-post d-flex">
                                <div className="post-thumb">
                                    <Link to="/"><img src={img24} alt="" /></Link>
                                </div>
                                <div className="post-data">
                                    <Link to="/" className="post-catagory">Politics</Link>
                                    <div className="post-meta">
                                        <Link to="/" className="post-title">
                                            <h6>Augue semper congue sit amet ac sapien. Fusce consequat.</h6>
                                        </Link>
                                        <p className="post-date"><span>7:00 AM</span> | <span>April 14</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="popular-news-area section-padding-80-50">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-8">
                            <div className="section-heading">
                                <h6>Your Popular News Preference</h6>
                            </div>
                            <div className="row">

                                <div className="col-12 col-md-6">
                                    <div className="single-blog-post style-3">
                                        <div className="post-thumb">
                                            <Link to="/"><img src={img12} alt="" /></Link>
                                        </div>
                                        <div className="post-data">
                                            <Link to="/" className="post-catagory">Finance</Link>
                                            <Link to="/" className="post-title">
                                                <h6>Dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet odio sodales placer. Sed varius leo ac...</h6>
                                            </Link>
                                            <div className="post-meta d-flex align-items-center">
                                                <Link to="/" className="post-like">
                                                    <img src={like} alt="" /> <span>392</span>
                                                </Link>
                                                <Link to="/" className="post-comment">
                                                    <img src={chat} alt="" /> <span>10</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6">
                                    <div className="single-blog-post style-3">
                                        <div className="post-thumb">
                                            <Link to="/"><img src={img13} alt="" /></Link>
                                        </div>
                                        <div className="post-data">
                                            <Link to="/" className="post-catagory">Finance</Link>
                                            <Link to="/" className="post-title">
                                                <h6>Dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet odio sodales placer. Sed varius leo ac...</h6>
                                            </Link>
                                            <div className="post-meta d-flex align-items-center">
                                                <Link to="/" className="post-like">
                                                    <img src={like} alt="" /> <span>392</span>
                                                </Link>
                                                <Link to="/" className="post-comment">
                                                    <img src={chat} alt="" /> <span>10</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6">
                                    <div className="single-blog-post style-3">
                                        <div className="post-thumb">
                                            <Link to="/"><img src={img14} alt="" /></Link>
                                        </div>
                                        <div className="post-data">
                                            <Link to="/" className="post-catagory">Finance</Link>
                                            <Link to="/" className="post-title">
                                                <h6>Dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet odio sodales placer. Sed varius leo ac...</h6>
                                            </Link>
                                            <div className="post-meta d-flex align-items-center">
                                                <Link to="/" className="post-like">
                                                    <img src={like} alt="" /> <span>392</span>
                                                </Link>
                                                <Link to="/" className="post-comment">
                                                    <img src={chat} alt="" /> <span>10</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6">
                                    <div className="single-blog-post style-3">
                                        <div className="post-thumb">
                                            <Link to="/"><img src={img15} alt="" /></Link>
                                        </div>
                                        <div className="post-data">
                                            <Link to="/" className="post-catagory">Finance</Link>
                                            <Link to="/" className="post-title">
                                                <h6>Dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet odio sodales placer. Sed varius leo ac...</h6>
                                            </Link>
                                            <div className="post-meta d-flex align-items-center">
                                                <Link to="/" className="post-like">
                                                    <img src={like} alt="" /> <span>392</span>
                                                </Link>
                                                <Link to="/" className="post-comment">
                                                    <img src={chat} alt="" /> <span>10</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="section-heading">
                                <h6>Info</h6>
                            </div>

                            <div className="popular-news-widget mb-30">
                                <h3>4 Most Popular News</h3>

                                <div className="single-popular-post">
                                    <Link to="/">
                                        <h6><span>1.</span> Amet, consectetur adipiscing elit. Nam eu metus sit amet odio sodales.</h6>
                                    </Link>
                                    <p>April 14, 2018</p>
                                </div>

                                <div className="single-popular-post">
                                    <Link to="/">
                                        <h6><span>2.</span> Consectetur adipiscing elit. Nam eu metus sit amet odio sodales placer.</h6>
                                    </Link>
                                    <p>April 14, 2018</p>
                                </div>

                                <div className="single-popular-post">
                                    <Link to="/">
                                        <h6><span>3.</span> Adipiscing elit. Nam eu metus sit amet odio sodales placer. Sed varius leo.</h6>
                                    </Link>
                                    <p>April 14, 2018</p>
                                </div>

                                <div className="single-popular-post">
                                    <Link to="/">
                                        <h6><span>4.</span> Eu metus sit amet odio sodales placer. Sed varius leo ac...</h6>
                                    </Link>
                                    <p>April 14, 2018</p>
                                </div>
                            </div>

                            <div className="newsletter-widget">
                                <h4>Preference</h4>
                                <p>Customize your news feed by saving your preferred sources, categories, and authors.</p>
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        placeholder="Category"
                                        value={preferences.category}
                                        onChange={(e) =>
                                            setPreferences({ ...preferences, category: e.target.value })
                                        }
                                    />
                                    <input
                                        type="text"
                                        placeholder="Source"
                                        value={preferences.source}
                                        onChange={(e) =>
                                            setPreferences({ ...preferences, source: e.target.value })
                                        }
                                    />
                                    <input
                                        type="text"
                                        placeholder="Author"
                                        value={preferences.author}
                                        onChange={(e) =>
                                            setPreferences({ ...preferences, author: e.target.value })
                                        }
                                    />
                                    <button type="submit" className="btn w-100">Save preference</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </App>
    );
};

export default Articles;
