import React from 'react'
import styled from 'styled-components'
//
import Button from '../components/atoms/Button'
import HeroBG from '../components/atoms/HeroBG'
import Card from '../components/atoms/Card'
//
import imge from '../img/kidplay.jpg'

export default () => (
  <div style={{ textAlign: 'center' }}>
        <HeroBG>
            <div className="is-margin-top">
                <h1>レゴれごレご</h1>
                <h2>ここにサブタイトルは入る</h2>
                <Button primary>Test!</Button>
            </div>
        </HeroBG>
        <div className="is-margin-top"/>
        <div className="container">
            <h2>ここに概要がくる</h2>
            <p>
                ここに概要を説明するテキストがずらり。
                CSS3では :first-child や :nth-child 、 :not() のような擬似クラスで柔軟にセレクタを指定することができます。 ... 例えば上記のように :first-child で指定した場合、直近の子要素にセレクタで指定しているもの以外の要素があると、期待どおりに ...
            </p>

            <div className="is-margin-top-4"/>
            <h2>ここに概要がくる</h2>
            <div className="is-flex-grid">
                <div className="is-flex-1">
                    <h3>ここにテキストタイトル</h3>
                    <p>
                        ここに概要を説明するテキストがずらり。 
                        CSS3では :first-child や :nth-child 、 :not() のような擬似クラスで柔軟にセレクタを指定することができます。 ... 例えば上記のように :first-child で指定した場合、直近の子要素にセレクタで指定しているもの以外の要素があると、期待どおりに ...
                        
                    </p>
                </div>
                <div className="is-flex-1">
                    <p><img src={imge} /></p>
                </div>
            </div>

            <div className="is-margin-top-4"/>
            <h2>ここに概要がくる</h2>
            <div className="is-flex-grid">
                <div className="is-flex-1">
                    <Card>ここにテキストタイトル</Card>
                </div>
                <div className="is-flex-1">
                    <Card>こっちはイメージ</Card>
                </div>
                
            </div>

        </div>
        
  </div>
)



