import {useEffect, useState} from "react";
import Head from "next/head";
import get from "../../services/api";
import Usercard from "../../components/usercard";
import styles from './post.module.css'
import Commentcard from "../../components/commentcard";
import Link from "next/link";

const PostPage = (props) => {
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])
  useEffect(() => {
    get('posts').then(res => {
      setPosts(res)
    }).catch(e => {
      console.log(e)
    })
    get('users').then(res => {
      setUsers(res)
    }).catch(e => {
      console.log(e)
    })
  }, [])
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
      <h1 style={{marginTop: 42}}>All Post</h1>
      <div className={styles.containerCard}>
        {posts.map(posts =>
          <div key={posts.id}>
            <Link href={`/posts/${posts.id}`}>
              <div>
                <Commentcard post={posts} name={getUsername(posts.userId)}/>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default PostPage;