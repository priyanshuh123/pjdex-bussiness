function ServiceCard({ icon: Icon, title, description, image }) {
  return (
    <article className="service-card">
      {image && <img className="service-image" src={image} alt="" />}
      <div className="service-copy">
        <span className="service-icon" aria-hidden="true"><Icon size={22} /></span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  )
}

export default ServiceCard
