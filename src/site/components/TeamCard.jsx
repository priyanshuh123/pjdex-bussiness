function TeamCard({ name, role, image }) {
  return (
    <article className="team-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{role}</p>
    </article>
  )
}

export default TeamCard
