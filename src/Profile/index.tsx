import React, { useContext } from "react"
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap'
import { loginContext } from "../_contexts/LoginContext"

function Profile() {
  const auth = useContext(loginContext)

  return (
    <div>
      <Card body className="align-items-center text-center">
        <CardImg top style={{
          objectFit: 'cover',
          borderRadius: '50%',
          width: '150px',
          height: '150px',
        }} src="https://via.placeholder.com/150" alt="" />
        <CardBody>
          <CardTitle className="card-title">pellentesque mollis</CardTitle>
          <CardSubtitle>Casablanca, MA</CardSubtitle>
          <CardText className="card-text" style={{ width: "400px", textAlign: "center", marginTop: "30px" }}>
            Phasellus dignissim, tellus in pellentesque mollis, mauris orci dignissim nisl, id gravida nunc enim quisPhasellus dignissim, tellus in pellentesque mollis, mauris orci dignissim nisl, id gravida nunc enim quis.
            </CardText>
          <Button>Voir Profile</Button>
          {/* <Button outline color="primary" onClick={e => auth.logout()}>Se déconnecter</Button> */}
        </CardBody>
        <Button color="primary" size="sm" onClick={e => auth.logout()}>Se déconnecter</Button>
      </Card>
    </div>
  )
}

export default Profile