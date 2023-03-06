    import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-white py-3 font-poppins">
      <div className="container flex items-center justify-between">
        <div className="">
          <Image
            src="/logo.svg"
            alt="logo"
            width={200}
            height={70}
            className=""
          />
        </div>
        <div className="flex uppercase text-sm w-1/2 justify-around font-semibold">
          <h1>How it works</h1>
          <h1>for doctors</h1>
          <h1>Medwallet</h1>
          <h1>About us</h1>
        </div>

        <div className="text-sm">
          <button className="bg-black text-white rounded-lg px-7 py-3 font-semibold mr-5">
            Sign in
          </button>
          <button className="bg-main rounded-lg px-6 py-3 font-semibold">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
