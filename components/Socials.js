import Link from "next/link";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
  RiTwitterXLine,
  RiGithubLine,
} from "react-icons/ri";
import { FaSpotify } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://discord.com/users/213114196060143618"}
        className="hover:text-accent transition-all duration-300"
        >
          <FaDiscord />
        </Link>
      <Link
        href={"https://github.com/tossinramen"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link
        href={"https://open.spotify.com/user/thundergodhd?si=00d19414a7044338"}
        className="hover:text-accent transition-all duration-300"
      >
        <FaSpotify />
      </Link>

      <Link
        href={"https://www.youtube.com/@tahsinr9622/videos"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiYoutubeLine />
      </Link>

      <Link
        href={"https://x.com/tossinramen"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiTwitterXLine />
      </Link>

      <Link
        href={"https://www.pinterest.com/tossinramen/_profile/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiPinterestLine />
      </Link>
      
    </div>
  );
};

export default Socials;
