import './UnDoneTasks.css'
import '../App.css'
import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
const UnDoneTasks = () => {
    return (
        <div className="container">
        <Card className="bg-color">
          <div className="header-bg" style={{ fontFamily: "Roboto !important" }}>
            <h1 className="title">Done LIST</h1>
          </div>
          <CardBody className="card-box">
            
    
             Un done
          </CardBody>  
          
        </Card>
        </div>
    )
}

export default UnDoneTasks
