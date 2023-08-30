import "./styles/Skill.css";

function Skill({ image, name }: { image: string; name: string }) {
  return (
    <div className="Skill">
      <img className={`${name}`} src={image} alt={name} />
      <span className="skill-name">{name}</span>
    </div>
  );
}

export default Skill;
