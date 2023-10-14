const List = ({ link, style, text }) => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center relative">
      <img src={link} alt="moon1" className="h-[150px] md:h-[180px] lg:h-[200px] 2xl:h-[300px] object-cover" />
      <button className={style}>{text}</button>
    </div>
  );
};

export default List;
