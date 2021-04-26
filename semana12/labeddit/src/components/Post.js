import React from 'react'
import { PostCard } from '../style/style'
import likeIcon from '../images/favorite.svg'

export default function Post(props) {
    return (
        <PostCard>
            <h2>Nome de usuário</h2>
            <p>aaaaaaaaaaaaa aaaaaaaa aaaaaaaaaaa aaaaaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaa aaaaaaaaaaa aaaaaaaa aaaaaaaa aaaaaaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaa aaaaaaaa aaaaaaaa aaaaaaa aaaaaaaaaaa aaaaaaaa aaaaaa aaaaaaaaaa aaaaaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaa aaaaaaa aaaaaa aaaaaaaaaa aaaaaa aaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa</p>
            <section>
                <>
                <div>
                    <button><img src={likeIcon} /></button>
                    <p>2</p>
                </div>
                <div>
                    <button><p>X</p></button>
                    <p>2</p>
                </div>
                </>
                <b>90 comentários</b>
            </section>
        </PostCard>
    )
}