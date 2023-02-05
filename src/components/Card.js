import "./card.css";
export default function Card({ person }) {
  return (
    <div className="person" key={person.id}>
      <img src={person.img} alt="" className="person-img" />
      <h3>{person.name}</h3>
      <span className="about">{person.about}</span>
      <h4>{person.job}</h4>
    </div>
  );
}
