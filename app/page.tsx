import Header from "./_components/header";
import SearchInput from "./_components/search";

const Home = () => {
  return (
    <>
      <Header />
      <div className="px-6 pt-5">
        <SearchInput />
      </div>
    </>
  );
};

export default Home;
