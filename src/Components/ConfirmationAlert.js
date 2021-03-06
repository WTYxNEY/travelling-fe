import React from 'react'
import Swal from 'sweetalert2'

 function ConfirmationAlert() {
    return (
        <>
            {
                Swal.fire({
                    icon: 'success',
                    title: `Delete successfully`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        </>
    )
}

export default ConfirmationAlert