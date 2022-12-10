export default function LoginPage() {
  return (
    <div className="flex flex-col p-5 font-Poxppins">
      <h1 className="pt-10 text-7xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#EB4174] to-[#FFE3E]">
        จะกินไฬดี
      </h1>
      <h2 className="text-center font-bold text-3xl my-10">LOGIN</h2>
      <input
        className="px-10 py-5 border rounded-full text-center text-xl"
        type="email"
        name=""
        id=""
        placeholder="Email address"
      />
      <input
        className="px-10 py-5 border mt-5 rounded-full text-center text-xl"
        type="password"
        name=""
        id=""
        placeholder="Password"
      />
      <button className="uppercase mt-10 bg-primary py-5 text-white font-bold rounded-full">
        login
      </button>

      <hr className="" />

      <p className="text-center text-primary font-light">
        Don’t have an account yet?
      </p>
      <button className="uppercase border-primary text-primary py-5 font-bold border rounded-full">
        register
      </button>
    </div>
  );
}
