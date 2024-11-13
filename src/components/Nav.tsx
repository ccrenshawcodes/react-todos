function Nav () {
  return(
    <div className='top-nav'>
      <h1>Your Todos!</h1>
      <div className='top-nav-actions'>
        <button className='universal-new'>New...</button>
        <button className='light-dark-toggle'>Color Mode</button>
      </div>
    </div>
  )
}

export default Nav;