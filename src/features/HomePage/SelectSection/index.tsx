import Link from "next/link";
import Image1 from "@/@images/homepageBanner/banner-img.png";
import Image2 from "@/@images/homepageBanner/banner-img6.webp";
import Image from "next/image";
import Button from "@/@components/ui/Button";

const SelectSection = () => {
  return (
    <section className="mt-10 grid grid-cols-2 gap-4">
      <Link
        href="/cooks"
        className="p-3 border-2 border-black-50 rounded-md  flex flex-col items-center justify-center"
      >
        <div className="relative">
          <Image
            src={Image2}
            alt="want eat"
            className="w-full object-cover rounded-lg"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-lg"></div>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white">
            <h2 className="text-4xl font-bold">I want to eat</h2>
            <Button className=" px-10 !bg-orange-400 mt-3"><span className="text-white">Explore</span></Button>
          </div>
        </div>
      </Link>
      <Link
        href="/signup?cook=true"
        className="p-3 border-2 border-black-50 rounded-md flex flex-col items-center justify-center"
      >
        <div className="relative">
          <Image
            src={Image1}
            alt="want eat"
            className="w-full object-cover rounded-lg"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-lg"></div>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white">
            <h2 className="text-4xl font-bold">I want to cook!</h2>
            <Button className=" px-10 !bg-orange-400 mt-3"><span className="text-white">Explore</span></Button>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default SelectSection;
