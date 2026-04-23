export default function Experience({ experience }) {
  return (
    <div className="exp-item">
      <div>
        <p className="exp-role">{experience.role}</p>
        <p className="exp-company">{experience.company}</p>
        <p className="exp-desc">{experience.desc}</p>
      </div>
      <p className="exp-date">{experience.date}</p>
    </div>
  );
}
