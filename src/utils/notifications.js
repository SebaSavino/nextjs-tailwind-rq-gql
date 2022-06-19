import Swal from 'sweetalert2'

export const types = {
    info: 'info',
    error: 'error',
    success: 'success'
}

export const minimal = (title, icon = types.success) => {
    Swal.fire({
        icon,
        title,
        timer: 1500,
        position: 'top-end',
        timerProgressBar: true,
        showConfirmButton: false,
    })
}
