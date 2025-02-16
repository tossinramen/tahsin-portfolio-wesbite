import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href="/work"
        className="relative w-[185px] h-[185px] flex justify-center items-center 
                   bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
      
        <div className="relative w-[141px] h-[148px]">
          <Image
            src="/rounded-text.png"
            width={141}
            height={148}
            alt="Rounded Text Logo"
            className="animate-spin-slow w-full h-full"
          />
        </div>

        {/* Arrow Icon */}
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
