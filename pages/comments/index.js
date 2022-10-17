import {useEffect, useState} from "react";
import Head from "next/head";
import get from "../../services/api";
import Commentcard from "../../components/commentcard";
import Link from "next/link";
import style from "./comment.module.css"

const CommentPage = (props) => {
  const [comments, setComments] = useState([])
  useEffect(() => {
    get('comments').then(res => {
      setComments(res)
    }).catch(e => {
      console.log(e)
    })
  }, [])
  return(
    <div>
      <Head>
        <title>User | Inaproduct Social</title>
        <meta name="description" content="Social media untuk Inaproduct" />
        <link rel="icon" href="/favicon_inaproduct.png" />
      </Head>
      <h1 style={{marginTop: 42}}>All Comments</h1>
      <div className={style.containerCard}>
        {comments.map(c =>
          <div key={c.id}>
            <Link href={`/comments/${c.id}`}>
              <div>
                <Commentcard post={c} name={c.name}/>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default CommentPage;