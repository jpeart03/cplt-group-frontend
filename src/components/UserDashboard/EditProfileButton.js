import {Button } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom"


const EditProfileButton = () => {
  const { authLoading, currentUser, login, logout, register} = useAuth();

  const handleEditProfile = (e) => {
    e.preventDefault()
    console.log("EditProfile BUTTON CLICKED", "currentUser.username")
  }

  return (
    <div>
      <Button variant="success" as={Link} to={'/editprofile'}>Edit Profile</Button>
    </div>
  )
}

export default EditProfileButton