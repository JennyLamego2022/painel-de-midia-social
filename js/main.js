document.body.setAttribute('data-theme', 't-light')

const button = document.querySelector('.js-theme')

    const themes = {
        't-dark' : 't-light',
        't-light' : 't-dark', 
    }
    
    if(button){
        button.addEventListener('click', event => {
            event.preventDefault()
            const currentThemes = document.body.dataset.theme
            document.body.setAttribute('data-theme', themes[currentThemes] || 't-light')
        })
    }

