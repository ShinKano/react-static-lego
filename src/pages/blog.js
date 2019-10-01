import React from 'react'
import { useRouteData } from 'react-static'
//
import { Link } from 'components/Router'
//
import HeroBG from '../components/atoms/HeroBG'

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
                    いちばん古いブログをみる
                </a>
            </div>
            <br />
                All Posts:
            <ul>
                {posts.map(post => (
                <li key={post.id}>
                    <Link to={`/blog/post/${post.id}/`}>{post.title}</Link>
                </li>
                ))}
            </ul>
                <a href="#top" id="bottom">
                    いちばん新しいブログをみる
                </a>
        </div>
  )
}
