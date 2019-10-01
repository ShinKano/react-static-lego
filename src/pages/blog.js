import React from 'react'
import { useRouteData } from 'react-static'
//
import { Link } from 'components/Router'
//
import Button from '../components/atoms/Button'
import HeroBG from '../components/atoms/HeroBG'
import Card from '../components/atoms/Card'
import Punctuation from '../components/atoms/Punctuation'
//
import Footer from '../components/templates/Footer'


export default function Blog() {
    const { posts } = useRouteData()
    return (
        <div style={{ textAlign: 'center' }}>
            <HeroBG blue>
            <div className="is-margin-top">
                <div className="is-margin-top-4"/>
                <br />
                <h1>スタッフのブログ</h1>
                <h2>ここにサブタイトルは入る</h2>
            </div>
            </HeroBG>


            <div className="is-margin-top-4"/>
            <div>
                <a href="#bottom" id="top">
                    <Button pink>いちばん古いブログをみる</Button>
                </a>
            </div>


            <div className="container">
                <br />
                <Punctuation />
                <br />
                <ul className="is-align-left">
                    {posts.map(post => (
                    <li key={post.id}>
                        <Card>
                            <Link to={`/blog/post/${post.id}/`}>
                                <p>{post.created_at.slice(0,16).replace('T',' - ')}</p>
                                <p>{post.title}</p>
                            </Link>

                        </Card>
                    </li>
                    ))}
                </ul>
            </div>

            <br />
            <Punctuation />
            <br />
            <div className="is-margin-top"/>
            <a href="#top" id="bottom">
                <Button pink>いちばん新しいブログをみる</Button>
            </a>
            <div className="is-margin-top-4"/>
            

            <Footer />
        </div>
  )
}
