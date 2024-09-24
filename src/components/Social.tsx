import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter, FaFacebook, FaInstagram} from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Stpreuxmykel"},
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/mykel-st-preux-a8347a225/"},
  // { icon: />, path: ""},
  { icon: <FaTwitter />, path: "https://x.com/MykelPreux"},
  {icon: <FaFacebook/>, path: "https://www.facebook.com/mykel.saintpreux.1"},
  {icon: <FaInstagram/>, path: "https://www.instagram.com/mykelsaintpreux/"}

]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return(
          <Link href={item.path} key={index} className={iconStyles} >
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Social;
