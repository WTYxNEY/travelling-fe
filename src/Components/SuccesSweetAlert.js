import React from 'react'
import Swal from 'sweetalert2'

export default function SuccesSweetAlert(message) {
    return (
        <>
            {
                Swal.fire({
                    icon: 'success',
                    title: `${message}`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        </>
    )
}
