import React from 'react'

function Alert(props) {

  // type which is sucess cant be captailized hence a function is used to do the work
  const capatalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  return (
    // a syntax for running code
    // adding sucess in className as Javascript
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capatalize(props.alert.type)}</strong> {props.alert.msg}

        {/* Below line of code shows the closing button in alert */}
        {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
    </div>
  )
}

export default Alert