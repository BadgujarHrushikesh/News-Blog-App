import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import Spinner from '../components/Spinner'


function NewsDesc() {
    const [loading, setLoading] = useState(false)
    const [newsItem, setNewsItem] = useState(null)
    const getData = async () => {
        setLoading(true)
        try {
            const result = await axios.post(
                `http://localhost:8000/api/newsitems/getnewsitembyid/${params.newsid}`,
                {
                    newsid: params.newsid,
                }
            )
            setNewsItem(result.data)
            console.log(result.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
    useEffect(() => {
        getData()
    }, [])
    const params = useParams()

    // const static_image = 'https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg'
    const static_image = 'https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/3242/live/aa1a5260-11d6-11ef-82e8-cd354766a224.jpg'

    return (
        <Layout>
            {loading ? (
                <Spinner />
            ) : (
                <div className="p-5">
                    <div className="relative h-64 md:h-120">
                        <img
                            src={static_image}
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="mt-5">
                        <h1 className="my-3 text-2xl font-semibold">
                            {newsItem !== null && newsItem.title}
                        </h1>
                        <p>{newsItem !== null && newsItem.description}</p>
                        <p>{newsItem !== null && newsItem.content}</p>
                        <p>{newsItem !== null && newsItem.postedBy.email}</p>
                    </div>
                </div>
            )}
        </Layout>
    );


}
export default NewsDesc