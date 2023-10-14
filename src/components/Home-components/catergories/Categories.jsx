import List from "./List";

const Categories = () => {
  const list = [
    {
      link: "https://mooncart.dexignzone.com/xhtml/images/category/pic1.jpg",
      text: "EXCERCISE BALL",
      id: crypto.randomUUID(),
      styles:
        "border-black border-[1px] text-[12px] 2xl:text-[1.3rem] tracking-[1px] font-semibold py-1 px-3 bg-black text-white",
    },
    {
      link: "https://mooncart.dexignzone.com/xhtml/images/category/pic2.jpg",
      text: "FITNESS TRACKERS",
      id: crypto.randomUUID(),
      styles:
        "border-black border-[1px] text-[12px] 2xl:text-[1.3rem] tracking-[1px] font-semibold py-1 px-3 bg-black text-white",
    },
    {
      link: "https://mooncart.dexignzone.com/xhtml/images/category/pic3.jpg",
      text: "YOGA RING",
      id: crypto.randomUUID(),
      styles:
        " border-black border-[1px] text-[12px] 2xl:text-[1.3rem] tracking-[1px] font-semibold py-1 px-3 bg-black text-white",
    },
    {
      link: "https://mooncart.dexignzone.com/xhtml/images/category/pic4.jpg",
      text: "DUMBBELLS",
      id: crypto.randomUUID(),
      styles:
        "border-black border-[1px] text-[12px] 2xl:text-[1.3rem] tracking-[1px] font-semibold py-1 px-3 bg-black text-white",
    },
    {
      link: "https://mooncart.dexignzone.com/xhtml/images/category/pic5.jpg",
      text: "YOGA MATS",
      id: crypto.randomUUID(),
      styles:
        "border-black border-[1px] text-[12px] 2xl:text-[1.3rem] tracking-[1px] font-semibold py-1 px-3 bg-black text-white",
    },
    {
      link: "https://mooncart.dexignzone.com/xhtml/images/category/pic6.jpg",
      text: "PROTIENS",
      id: crypto.randomUUID(),
      styles:
        "border-black text-[12px] 2xl:text-[1.3rem] tracking-[1px] font-semibold border-black border-[1px] py-1 px-3 bg-black text-white",
    },
  ];
  return (
    <section className="my-[50px] md:py-0 md:px-[100px] px-5">
      <h1 className="font-semibold lg:text-[1.2rem] 2xl:text-[2rem] pb-3">
        Featured Categories
      </h1>
      <div className="flex justify-between lg:text-[14px] 2xl:text-[1.8rem] text-gray-500">
        <h3>Discover the most trending products in Mooncart.</h3>
        <a href="#" className="hidden lg:block text-[12px] 2xl:text-[1.8rem]">
          See All Products
          <i className="fa-solid fa-greater-than text-[10px] 2xl:text-[1.2rem] pl-2"></i>
        </a>
      </div>
      <div className="mt-10 flex flex-col gap-5 md:grid md:grid-cols-2 md:gap-7 lg:grid lg:grid-cols-3 lg:gap-10">
        {list.map((value) => {
          return (
            <List
              key={value.id}
              text={value.text}
              style={value.styles}
              link={value.link}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Categories;
