import styles from './sidebar.module.css'
import Link from "next/link";

const Sidebar = (props) => {
  const menuList = [
    {
      name: 'Users',
      link: '/users',
      icon: 'user.png'
    },
    {
      name: 'Posts',
      link: '/posts',
      icon: 'post.png'
    },
    {
      name: 'Comments',
      link: '/comments',
      icon: 'comment.png'
    }]
  return (
    <div className={styles.container}>
      <Link href={'/'}>
        <img className={styles.logo} src={'/favicon_inaproduct.png'}/>
      </Link>
      {menuList.map(menu=>
        <Link href={menu.link} key={menu.name}>
          <div className={styles.containerMenu}>
            <img className={styles.icon} src={`/icon/${menu.icon}`} alt={menu.name}/>
            <div className={styles.textMenu}>{menu.name}</div>
          </div>
        </Link>
      )}
    </div>
  )
}

export default Sidebar;