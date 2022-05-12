import React from 'react'
function MyButton({handleSubmit,btname}) {

  return (
      <>
    
    <button type="submit" onClick={handleSubmit}  class="btn-primary btn-submit">{btname}</button>


</>

  )
}

export default MyButton;