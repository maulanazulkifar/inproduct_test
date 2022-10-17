import {useEffect, useState} from "react";
import { useRouter } from 'next/router'
import get from "../../../services/api";
import styles from "../../../components/sidebar/sidebar.module.css";
import Head from "next/head";
import Commentcard from "../../../components/commentcard";

const CommentPage = (props) => {
  const router = useRouter()
  const id = router.query.id
  const [comment, setComment] = useState([])
  useEffect(() => {
    if (id) {
      get('comments/'+id).then(res => {
        setComment(res)
      })
    }
  }, [id])
  return(
    <div>
      <Head>
        <title>Comment | Inaproduct Social</title>
        <meta name="description" content="Social media untuk Inaproduct" />
        <link rel="icon" href="/favicon_inaproduct.png" />
      </Head>
      <h1>Comment</h1>
      <Commentcard post={comment} name={comment.name}/>
    </div>
  )
}

export default CommentPage;