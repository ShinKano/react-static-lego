import React from 'react'
import styled from 'styled-components'
//
import Button from '../components/atoms/Button'
import HeroBG from '../components/atoms/HeroBG'
import Card from '../components/atoms/Card'
import Punctuation from '../components/atoms/Punctuation'
import Accordion from '../components/atoms/Accordion'
//
import Footer from '../components/templates/Footer'
//
import kidplay from '../img/kidplay.jpg'
import babyplay from '../img/babyplay.jpg'

export default () => (
    <div style={{ textAlign: 'center' }}>
        <HeroBG>
            <div className="is-margin-top">
                <div className="is-margin-top-4"/>
                <br />
                <h1>レゴれごレご</h1>
                <h2>ここにサブタイトルは入る</h2>
            </div>
        </HeroBG>
        <div className="is-margin-top"/>
        <div className="container">
            <h2>ここに概要がくる</h2>
            <Punctuation />
            <p>
                ここに概要を説明するテキストがずらり。
                CSS3では :first-child や :nth-child 、 :not() のような擬似クラスで柔軟にセレクタを指定することができます。 ... 例えば上記のように :first-child で指定した場合、直近の子要素にセレクタで指定しているもの以外の要素があると、期待どおりに ...
            </p>

            <div className="is-margin-top-4"/>
            <h2>ここに概要がくる</h2>
            <Punctuation />
            <div className="is-flex-grid">
                <div className="is-flex-1">
                    <h3>ここにテキストタイトル</h3>
                    <p>
                        ここに概要を説明するテキストがずらり。 
                        CSS3では :first-child や :nth-child 、 :not() のような擬似クラスで柔軟にセレクタを指定することができます。 ... 例えば上記のように :first-child で指定した場合、直近の子要素にセレクタで指定しているもの以外の要素があると、期待どおりに ...
                    </p>
                </div>
                <div className="is-flex-1">
                    <p><img src={kidplay} /></p>
                </div>
            </div>

            <div className="is-flex-grid">
                <div className="is-flex-1">
                    <h3>ここにテキストタイトル</h3>
                    <p>
                        ここに概要を説明するテキストがずらり。 
                        CSS3では :first-child や :nth-child 、 :not() のような擬似クラスで柔軟にセレクタを指定することができます。 ... 例えば上記のように :first-child で指定した場合、直近の子要素にセレクタで指定しているもの以外の要素があると、期待どおりに ...
                        
                    </p>
                </div>
                <div className="is-flex-1">
                    <p><img src={babyplay} /></p>
                </div>
            </div>

            <div className="is-margin-top-4"/>
            <h2>料金プラン</h2>
            <Punctuation />
            <div className="is-flex-grid">
                <div className="is-flex-1">
                    <Card>
                        <h3 className="underline">3日プラン</h3>
                        <p>到着後から３日間</p>
                        <h3 className="price">
                            <span className="small-span">¥</span>
                            &nbsp;980&nbsp;
                            <span className="small-span"><br/>（送料込み）</span>
                        </h3>
                        <Button　green>注文する</Button>
                    </Card>
                </div>
                <div className="is-flex-1">
                    <Card>
                        <h3 className="underline">7日プラン</h3>
                        <p>到着後から３日間</p>
                        <h3 className="price">
                            <span className="small-span">¥</span>
                            &nbsp;1480&nbsp;
                            <span className="small-span"><br/>（送料込み）</span>
                        </h3>
                        <Button　green>注文する</Button>
                    </Card>
                </div>
            </div>

            <h2>よくあるご質問</h2>
            <Punctuation />
            <div className="is-margin-top"/>
            <Accordion
                question="送料についての質問なのですが?"
                answer="送料のご質問はこっちでお答えしますね。"
            />
            <Accordion
                question="料金は支払いたいのですが?"
                answer="支払いは自動で行われますのでご安心ください。"
            />
            <Accordion
                question="サービスのお試しをお願いしたいのですが？"
                answer="商品が届かない場合は、こちらまでお問い合わせください。"
            />

            <div className="is-margin-top-4"/>
            <h3>レゴについてその他にご不明な点がありますか？<br />「お問い合わせ」からご質問ください。</h3>

        </div>

        <div className="is-margin-top-4"/>
        <Footer />
    </div>
)



