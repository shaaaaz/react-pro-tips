import { useState } from 'react'

function Forms() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  })

  const [alerts, setAlerts] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  })

  const [focusState, setFocusState] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phoneNumber: false
  })

  const [registrationSuccess, setRegistrationSuccess] = useState(false)

  const handleChange = (e) => {
    const {name,value} = e.target
    setFormData((preData) => ({...preData,[name] : value}))
  }  

  const handleFocus = (name) => {
    setFocusState((prefocusState) =>({...prefocusState,[name] : true}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newAlerts = {}

    if(formData.firstName == ""){
      newAlerts.firstName = "Please Enter your first Name!!!!!"
    }
    else{
      newAlerts.firstName = ""
    }

    if(formData.lastName == ""){
      newAlerts.lastName = "Please Enter your last Name!!!!!"
    }
    else{
      newAlerts.lastName = ""
    }

    if(formData.email == ""){
      newAlerts.email = "Please Enter your email!!!!!"
    }
    else{
      newAlerts.email = ""
    }

    if(formData.phoneNumber == ""){
      newAlerts.phoneNumber = "Please Enter your phoneNumber!!!!!"
    }
    else{
      newAlerts.phoneNumber = ""
    }

    setAlerts(newAlerts)

    
    if(newAlerts.firstName == "" &&
    newAlerts.lastName == "" &&
    newAlerts.phoneNumber == "" &&
    newAlerts.email == ""){
      setRegistrationSuccess(true)
       }
  }

  console.log(focusState.firstName)

  return (
    <>
      <div className="App">

        {registrationSuccess && (
        <div style={{
          backgroundColor : "orange",
          color : "white",
          padding : "10px",
          marginTop : "10px",
          borderRadius : "8px",
          textAlign : "center",
          height : "60px",
          marginBotton : "20px",
          fontSize : "30px",
          display : "flex",
          alignItems : "center",
          justifyContent : "center"
        }}>
          Registration Successfull!
        </div>
        )}


        <form onSubmit={handleSubmit}>

          <label>
            <input type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              onFocus={() => handleFocus('firstName')}
              placeholder="Enter your name"
              style={{ borderColor: focusState.firstName ? 'navy' : '#ccc' }}>
            </input>

            <div className="alert">
              {alerts.firstName}
            </div>
          </label>

          <br />

          <label>
            <input type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              onFocus={() => handleFocus('lastName')}
              placeholder="Enter your lastName"
              style={{ borderColor: focusState.lastName ? 'navy' : '#ccc' }}>
            </input>

            <div className="alert">
              {alerts.lastName}
            </div>
          </label>

          <br />

          <label>
            <input type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => handleFocus('email')}
              placeholder="Enter your name"
              style={{ borderColor: focusState.email ? 'navy' : '#ccc' }}>
            </input>

            <div className="alert">
              {alerts.email}
            </div>
          </label>

          <br />

          <label>
            <input type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              onFocus={() => handleFocus('phoneNumber')}
              placeholder="Enter your phoneNumber"
              style={{ borderColor: focusState.email ? 'navy' : '#ccc' }}>
            </input>

            <div className="alert">
              {alerts.phoneNumber}
            </div>
          </label>

          <button type='submit'
          className='submit'
            style={{
              backgroundColor: 'green',
              color: 'white',
              padding: '10px',
              border: 'none',
              cursor: 'pointer'
            }}> Register </button>


        </form>
      </div >
    </>
  )
}

export default Forms
