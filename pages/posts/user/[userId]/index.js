import {useEffect, useState} from "react";
import Head from "next/head";
import { useRouter } from 'next/router'
import get from "../../../../services/api";
import styles from "../../post.module.css"
import Commentcard from "../../../../components/commentcard";
import Link from "next/link";

const PostPage = (props) => {
  const router = useRouter()
  const id = router.query.userId
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])
  useEffect(() => {
    if (id) {
      get(`users/${id}/posts`).then(res => {
        setPosts(res)
      }).catch(e => {
        console.log(e)
      })
      get(`users/${id}`).then(res => {
        setUsers(res)
      }).catch(e => {
        console.log(e)
      })
    }
  }, [id])
  return(
    <div>
      <Head>
        <title>{users.name}&lsquo;s Post | Inaproduct Social</title>
        <meta name="description" content="Social media untuk Inaproduct" />
        <link rel="icon" href="/favicon_inaproduct.png" />
      </Head>
      <h1>{users.name}&lsquo;s Post</h1>
      <div className={styles.containerCard}>
        {posts.map(posts =>
          <div key={posts.id}>
            <Link href={`/posts/${posts.id}`}>
              <div>
                <Commentcard post={posts} name={users.name}/>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default PostPage;