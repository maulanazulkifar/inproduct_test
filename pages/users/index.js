import {useEffect, useState} from "react";
import Head from "next/head";
import get from "../../services/api";
import Usercard from "../../components/usercard";
import styles from './user.module.css'
import Link from "next/link";

const UserPage = (props) => {
  const [users, setUsers] = useState([])
  useEffect(() => {
   get('users').then(res => {
      setUsers(res)
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
      <h1 style={{marginTop: 42}}>Users</h1>
      <div className={styles.containerCard}>
        {users.map(user =>
          <div key={user.id}>
            <Link href={`/posts/user/${user.id}`}>
              <div>
                <Usercard user={user}/>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default UserPage;