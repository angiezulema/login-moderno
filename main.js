// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const inputs = document.querySelectorAll('.input-group input');
    const loginBtn = document.querySelector('.btn-login');

    // Evento de envío del formulario con validaciones personalizadas
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        // Validación: campo usuario vacío
        if (!username) {
            showAlert('error', 'Oops...', 'Por favor ingresa tu usuario');
            return;
        }

        // Validación: campo contraseña vacío
        if (!password) {
            showAlert('error', 'Oops...', 'Por favor ingresa tu contraseña');
            return;
        }

        // Validación: longitud mínima de la contraseña
        if (password.length < 6) {
            showAlert('warning', 'Contraseña muy corta', 'Debe tener al menos 6 caracteres');
            return;
        }

        // Simulación de login exitoso
        Swal.fire({
            title: '¡Bienvenido!',
            text: 'Inicio de sesión exitoso',
            icon: 'success',
            background: 'rgba(255, 255, 255, 0.9)',
            timer: 2000,
            timerProgressBar: true,
            showClass: {
                popup: 'animate__animated animate__zoomIn'
            },
            didOpen: () => {
                Swal.showLoading();
            }
        }).then(() => {
            window.location.href = "#";
        });
    });

    // Mostrar alertas personalizadas con SweetAlert2
    function showAlert(icon, title, text) {
        Swal.fire({
            icon,
            title,
            text,
            background: 'rgba(255, 255, 255, 0.9)',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        });
    }

    // Efecto visual al enfocar y desenfocar los inputs
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.querySelector('i').style.color = '#23d5ab';
        });
        input.addEventListener('blur', () => {
            input.parentElement.querySelector('i').style.color = '#fff';
        });
    });

    // Efecto visual para el botón de login al pasar el cursor
    loginBtn.addEventListener('mouseenter', () => {
        loginBtn.style.letterSpacing = '1px';
    });

    loginBtn.addEventListener('mouseleave', () => {
        loginBtn.style.letterSpacing = 'normal';
    });
});
