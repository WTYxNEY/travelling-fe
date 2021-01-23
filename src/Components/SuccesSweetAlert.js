import React from 'react'
import Swal from 'sweetalert2'

export default function SuccesSweetAlert(message) {
    return (
        <>
            {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${message}`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        </>
    )
}
