import First from "../../assets/images/1st.jpg"; 
import Second from "../../assets/images/2nd.jpg"; 
import Third from "../../assets/images/3rd.jpg"; 
function Modal(){
return(
    
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={Third} className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src={Second} className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
    <img src={First} className="d-block w-100" alt="..." />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}
export default Modal;