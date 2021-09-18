import {Button } from "react-bootstrap"


const EditProfileButton = () => {
  const handleEditProfile = (e) => {
    e.preventDefault()
    console.log("EditProfile BUTTON CLICKED")
  }

  return (
    <div>
      <Button onClick={handleEditProfile}>Edit Profile</Button>
    </div>
  )
}

export default EditProfileButton