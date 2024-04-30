import CategoryList from "./_components/category-list";
import Header from "./_components/header";
import SearchInput from "./_components/search";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <Header />
      <div className="px-6 pt-5">
        <SearchInput />
      </div>
      <div className="px-5 pt-6">
        <CategoryList />
      </div>

      <div className="px-5 pt-6">
        <Image
          src="/Banner Pizza.svg"
          alt="Até 30% de descontos em pizzas"
          height={0}
          width={0}
          className="h-auto w-full object-contain"
          sizes="100vw"
          quality={100}
        />
      </div>
    </>
  );
};

export default Home;
