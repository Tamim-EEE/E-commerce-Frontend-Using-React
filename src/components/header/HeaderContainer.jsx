import DropCategories from "./All Category/categories";
import ListCategories from "./listCategory/ListCategories";
import Notice from "./notice";
import Header from "./header";

const HeaderContainer = () => {
  return (
    <div className="headerWraper">
      <Notice />
      <header className="header">
        <Header/>
      </header>
      <nav>
        <div className="container">
          <div className="row">
            <DropCategories />
            <ListCategories />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderContainer;
