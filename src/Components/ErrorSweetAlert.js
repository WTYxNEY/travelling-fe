import React from 'react'
import Swal from 'sweetalert2'

export default function ErrorSweetAlert(message) {
    return (
        <>
            {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${ message }`,
                })
            }
        </>
    )
}
