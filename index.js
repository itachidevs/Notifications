const Notification = props => {
  return <p className='message'>{props.message}</p>
}

const element = (
  <div className='container'>
    <h1 className='heading'>Notifications</h1>
    <div className='Notifications-container'>
      <div className='Notification-container info'>
        <img
          src='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
          className='notification info'
          alt='Information Message'
        />
        <Notification message='Information Message' />
      </div>
      <div className='Notification-container success'>
        <img
          src='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
          className='notification success'
          alt='Success Message'
        />
        <Notification message='Success Message' />
      </div>
      <div className='Notification-container warning'>
        <img
          src='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
          className='notification warning'
          alt='Warning Message'
        />
        <Notification message='Warning Message' />
      </div>
      <div className='Notification-container danger'>
        <img
          src='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
          className='notification danger'
          alt='Danger Message'
        />
        <Notification message='Danger Message' />
      </div>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
