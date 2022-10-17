import {useEffect, useState} from "react";
import Head from "next/head";
import { useRouter } from 'next/router'
import get from "../../../services/api";
import styles from "../post.module.css"
import Commentcard from "../../../components/commentcard";
import Link from "next/link";
import Usercard from "../../../components/usercard";

const postPage = (props) => {
  const router = useRouter()
  const id = router.query.id
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])
  const [comments, setComments] = useState([])
  useEffect(() => {
    if (id) {
      get('posts/'+id).then(res => {
        setPosts(res)
      }).catch(e => {
        console.log(e)
      })
      get('users').then(res => {
        setUsers(res)
      }).catch(e => {
        console.log(e)
      })
      get('posts/'+id+'/comments').then(res => {
        setComments(res)
      }).catch(e => {
        console.log(e)
      })
    }
  }, [id])
  const getUsername = (userId) => {
    let result = null;
    users.forEach(user => {
      if (user.id === userId) {
        result = user.name
      }
    })
    return result
  }
  return(
    <div>
      <Head>
        <title>User | Inaproduct Social</title>
        <meta name="description" content="Social media untuk Inaproduct" />
        <link rel="icon" href="/favicon_inaproduct.png" />
      </Head>
      <h1>Post</h1>
      <div className={styles.containerCard}>
        <div key={posts.id}>
          <Commentcard post={posts} name={getUsername(posts.userId)}/>
          <div>
            <h2>Comments</h2>
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
      </div>
    </div>
  )
}

export default postPage;