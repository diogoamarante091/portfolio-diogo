function TechnologyList({ technologies, visible }) {
  if (!visible) {
    return null
  }

  return (
    <ul className="tecnologias">
      {technologies.map((technology) => (
        <li key={technology}>{technology}</li>
      ))}
    </ul>
  )
}

export default TechnologyList