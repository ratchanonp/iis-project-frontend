type Props = {};

const OpenInfo = (props: Props) => {
  const isOpen = true;

  return (
    <div>
      <span
        className={`${
          isOpen ? "text-green-500" : "text-red-500"
        } font-bold font-Kanit`}
      >
        {isOpen ? "เปิด" : "ปิด"}
      </span>
      <span className="font-Kanit font-light text-sm ml-1">จนถึง 17:00 น.</span>
    </div>
  );
};

export default OpenInfo;
