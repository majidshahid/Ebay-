
import {Modal,Card } from "../../components";
import First from "../../assets/images/1st.jpg"; 
import Footer  from "../../components/footer";
 function Home() {
    return (
        <div>
            <Modal/>
            <div className="row"  style={{padding: "5%"}}>
<Card pic={First} text="the theory which explain the arrangement of three state of matter"/>
<Card pic={First} text="the theory which explain the arrangement of three state of matter"/>
<Card pic={First} text="the theory which explain the arrangement of three state of matter"/>
<Card pic={First} text="the theory which explain the arrangement of three state of matter"/>
<Card pic={First} text="the theory which explain the arrangement of three state of matter"/>
</div>
<Footer/>
        </div>
    )
}

export default Home;