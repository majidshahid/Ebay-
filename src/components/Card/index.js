function Card({ pic, text }) {
  return (

    <div className="card" style={{ width: '18rem' }}>
      <img src={pic} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text">{text}</p>
      </div>
    </div>
  )

}
export default Card;