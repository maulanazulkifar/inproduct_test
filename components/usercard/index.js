import styles from './usercard.module.css'

const Usercard = (props) => {
  const {user} = props
  return (
    <div className={styles.card}>
      <div>{user.name}</div>
      <div>{user.email}</div>
      <div>{user.phone}</div>
      <div>{user.website}</div>
    </div>
  )
}

export default Usercard;