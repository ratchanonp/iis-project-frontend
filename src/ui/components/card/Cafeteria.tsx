interface Props {
  title: string;
}

const Card = (props: Props) => {
  const { title } = props;

  return (
    <div className="shadow-md rounded-2xl overflow-hidden w-full h-48 relative">
      <div className="absolute flex justify-center w-full bottom-2">
        <button className="bg-primary text-white font-Kanit w-[90%] rounded-full py-2">
          {title}
        </button>
      </div>
    </div>
  );
};

export default Card;
