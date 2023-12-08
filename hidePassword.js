const passwordToggle = document.querySelector('.js-password-toggle')

passwordToggle.addEventListener('change', function() {
    const password = document.querySelector('.js-password'),
        passwordLabel = document.querySelector('.js-password-label')

    if (password.type === 'password') {
        password.type = 'text'
        passwordLabel.innerHTML = 'hide'
    } else {
        password.type = 'password'
        passwordLabel.innerHTML = 'show'
    }

    password.focus()
})