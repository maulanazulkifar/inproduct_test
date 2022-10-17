import styles from './commentcard.module.css'

const commentcard = (props) => {
  const {name, post} = props;
  return (
    <div className={styles.card}>
      <div className={styles.textName}>{name}</div>
      {
        post.title??<div>{post.title}</div>
      }
      <div>{post.body}</div>
      <div></div>
    </div>
  )
}

export default commentcard;