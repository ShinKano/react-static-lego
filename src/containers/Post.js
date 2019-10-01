import React from 'react'
import { useRouteData } from 'react-static'
//
import { Link } from 'components/Router'
import marked from 'marked'
import ReactHtmlParser from 'react-html-parser'
//
import Button from '../components/atoms/Button'

export default function Post() {
    const { post } = useRouteData()
    const html = marked(post.content);
  
    return (
        <div className="container">
            <div className="is-margin-top-4"/>
            
            <br />
            <h3>{post.title}</h3>
            { ReactHtmlParser(html) }
            <p>{post.created_at}</p>
            <Link to="/blog/">
                <Button primary>
                    {'<'} Back
                </Button>
            </Link>
        </div>
    )
}