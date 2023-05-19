import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../services/AppContext'
import ApiService from '../services/ApiService'

function Articles() {
    const auth = useContext(AppContext)

    const { token, setPreference, articles, setArticles } = auth

    const [isTrigger, setIsTriger] = useState(false)
    const [preferences, setPreferences] = useState({
        category: '',
        source: '',
        author: ''
    })
    const [filter, setFilter] = useState({
        keyword: '',
        category: '',
        source: '',
        date: ''
    })

    useEffect(() => {
        if (token || isTrigger) {
            setIsTriger(false)

            ApiService.getArticles(token)
                .then(({ data }) => {
                    setArticles(data.data)
                })
                .catch((error) => {
                    console.error(error.response)
                })
        }
    }, [token, setArticles, isTrigger])

    function formattedDateTime(dateTimeString) {
        if (dateTimeString) {
            return new Date(dateTimeString).toLocaleDateString('en-GB', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
                month: 'long',
                day: 'numeric'
            })
        }
    }

    function handleSubmit(e) {
        e.preventDefault()

        ApiService.savePreference(preferences, token)
            .then(({ data }) => {
                setPreference(data)
                setIsTriger(true)
            })
            .catch((error) => {
                console.error(error.response)
            })

        setPreferences({
            category: '',
            source: '',
            author: ''
        })
    }

    function handleFilter(e) {
        e.preventDefault()

        if (filter.date) {
            setFilter(filter.date)
        }
        if (filter.category) {
            setFilter(filter.category)
        }
        if (filter.source) {
            setFilter(filter.source)
        }

        ApiService.search(filter, token)
            .then(({ data }) => {
                setPreference(data.data)
                setIsTriger(true)
            })
            .catch((error) => {
                console.error(error.response)
            })

        setFilter({
            keyword: '',
            category: '',
            source: '',
            date: ''
        })
    }

    return (
        <>
            <div className="popular-news-area mt-30 mb-30">
                <div className="container">

                    <div className="row">
                        <div className='col-12 col-lg-8'>

                            <div className="section-heading">
                                <h6>Articles</h6>
                            </div>

                            {articles?.map((article) => (
                                <div key={article.id} className="col-md-6 col-lg-6">
                                    <div className="single-blog-post small-featured-post d-flex">
                                        <div className="post-thumb">
                                            <Link to="/">
                                                <img src={article.url_to_image} alt="" />
                                            </Link>
                                        </div>
                                        <div className="post-data">
                                            <Link to="/" className="post-catagory">
                                                {article.category}
                                            </Link>
                                            <div className="post-meta">
                                                <Link to={article.url} target="_blank" className="post-title">
                                                    <h6>{article.title}</h6>
                                                </Link>
                                                <p className="post-date">
                                                    {formattedDateTime(article.published_at) ?? article.published_at}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )) ?? <p className="post-date">No articlesfound!<br />Search for new articles above</p>}
                        </div>

                        <div className='col-12 col-lg-4'>
                            <div className="col-12">
                                <div className="section-heading">
                                    <h6>Info</h6>
                                </div>

                                <div className="newsletter-widget mb-15">
                                    <h4>Filter</h4>
                                    <p>Customize your news feed by setting source, category, and date you want for your articles.</p>
                                    <form onSubmit={handleFilter}>
                                        <input
                                            type="text"
                                            placeholder="Search keyword"
                                            value={filter.keyword}
                                            required
                                            onChange={(e) =>
                                                setFilter({ ...filter, keyword: e.target.value })
                                            }
                                        />
                                        <input
                                            type="text"
                                            placeholder="Category"
                                            value={filter.category}
                                            onChange={(e) =>
                                                setFilter({ ...filter, category: e.target.value })
                                            }
                                        />
                                        <input
                                            type="text"
                                            placeholder="Source"
                                            value={filter.source}
                                            onChange={(e) =>
                                                setFilter({ ...filter, source: e.target.value })
                                            }
                                        />
                                        <input
                                            type="date"
                                            placeholder="Date"
                                            value={filter.date}
                                            onChange={(e) =>
                                                setFilter({ ...filter, date: e.target.value })
                                            }
                                        />
                                        <button type="submit" className="btn w-100">Filter</button>
                                    </form>
                                </div>

                                <div className="newsletter-widget mb-15">
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
            </div>
        </>
    )
}

export default Articles
