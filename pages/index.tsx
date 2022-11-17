import Image from "next/image";

export default function WelcomePage() {
  return (
    <div className="relative">
        <Image src={"/welcomeimage.png"}
        alt="welcome"
        width={1163}
        height={872}
      />
    <h1 className="absolute">จะกินไฬดี</h1>
    </div>
  );

}
