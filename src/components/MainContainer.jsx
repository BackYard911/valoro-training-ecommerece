import "../styles/MainContainerStyles.css"
import { CardItem } from "./CardItem";
import img1 from "../images/image-1.png"
import img2 from "../images/image-2.png"
import img3 from "../images/image-3.png"
import img4 from "../images/image-4.png"
import img5 from "../images/image-5.png"

function MainContainer(props){

    return(
        <main className="main-container">
        <div className="items">
        <CardItem img={img1}
        name="cool pants"
        price="129"/>
        <CardItem img={img2}
        name="live shirt"
        price="99"/>
        <CardItem img={img3}
        name="basic one"
        price="69"/>
        <CardItem img={img4}
        name="cute dress"
        price="399"/>
        </div>
        <div className="side-item">

        <CardItem img={img5}
        name="tinder dress"
        price="399"/>
        </div>
        

        </main>
    )
}

export {MainContainer}