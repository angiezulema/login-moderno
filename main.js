    
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();
            
            // Validaciones
            if(username === '') {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Por favor ingresa tu usuario',
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdrop: `
                        rgba(0,0,123,0.4)
                        url("/images/nyan-cat.gif")
                        left top
                        no-repeat
                    `,
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                return;
            }
            
            if(password === '') {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Por favor ingresa tu contraseña',
                    background: 'rgba(255, 255, 255, 0.9)',
                    showClass: {
                        popup: 'animate__animated animate__shakeX'
                    }
                });
                return;
            }
            
            if(password.length < 6) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Contraseña muy corta',
                    text: 'La contraseña debe tener al menos 6 caracteres',
                    background: 'rgba(255, 255, 255, 0.9)',
                    showClass: {
                        popup: 'animate__animated animate__pulse'
                    }
                });
                return;
            }
            
            // Simulación de login exitoso
            Swal.fire({
                title: '¡Bienvenido!',
                text: 'Inicio de sesión exitoso',
                icon: 'success',
                background: 'rgba(255, 255, 255, 0.9)',
                showClass: {
                    popup: 'animate__animated animate__zoomIn'
                },
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                }
            }).then(() => {
                // Redirección después del login (simulado)
                window.location.href = "#";
            });
        });
        
        // Efecto hover dinámico para los inputs
        const inputs = document.querySelectorAll('.input-group input');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.querySelector('i').style.color = '#23d5ab';
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.querySelector('i').style.color = '#fff';
            });
        });
        
        // Animación adicional para el botón de login
        const loginBtn = document.querySelector('.btn-login');
        loginBtn.addEventListener('mouseenter', function() {
            this.style.letterSpacing = '1px';
        });
        
        loginBtn.addEventListener('mouseleave', function() {
            this.style.letterSpacing = 'normal';
        });
   