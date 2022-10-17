import Sidebar from "./sidebar";

const Layout = ({children}) => {
  return (
    <div style={{display: "flex"}}>
      <Sidebar/>
      <div>{children}</div>
    </div>
  );
}

export default Layout;