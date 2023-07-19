import "./styles/SocialLink.css";

function SocialLink({
  alt,
  image,
  text,
  link,
}: {
  link: string;
  alt: string;
  image: string;
  text: string;
}) {
  return (
    <div className="SocialLink">
      <a className="contact-link-img" href={link}>
        <img src={image} alt={alt} />
      </a>
      <p className="link-text">{text}</p>
    </div>
  );
}

export default SocialLink;
