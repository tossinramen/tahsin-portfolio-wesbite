import {
  RiYoutubeLine,
  RiTwitterXLine,
  RiGithubLine,
  RiPinterestLine,
} from "react-icons/ri";
import { FaSpotify } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <a
        href="https://discord.com/users/213114196060143618"
        className="hover:text-accent transition-all duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaDiscord />
      </a>

      <a
        href="https://github.com/tossinramen"
        className="hover:text-accent transition-all duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiGithubLine />
      </a>

      <a
        href="https://open.spotify.com/user/thundergodhd?si=00d19414a7044338"
        className="hover:text-accent transition-all duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaSpotify />
      </a>

      <a
        href="https://www.youtube.com/@tahsinr9622/videos"
        className="hover:text-accent transition-all duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiYoutubeLine />
      </a>
      

      <a
        href="https://x.com/tossinramen"
        className="hover:text-accent transition-all duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiTwitterXLine />
      </a>
      <a
        href="https://www.pinterest.com/tossinramen/"
        className="hover:text-accent transition-all duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiPinterestLine />
      </a>

      
    </div>
  );
};

export default Socials;
