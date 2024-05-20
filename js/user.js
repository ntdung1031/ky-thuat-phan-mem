var imgPreview = document.querySelector('.prod-preview-img')
var imgItem = document.getElementsByClassName('prod-preview-thum-item')
        for (var index of imgItem) {
            index.addEventListener('click', (e) => {
                if (e.currentTarget.getAttribute('src') === imgPreview.getAttribute('src')) {
                    return;
                }
                for (var index of imgItem) {
                    Object.assign(index.style, {
                        border: '1px solid var(--yelo-color)',
                        boxShadow: 'unset'
                    })
                }
                Object.assign(e.currentTarget.style, {
                    border: '2px solid var(--yelo-color)',
                    boxShadow: 'var(--yelo-color) 0px 0px 9px 0px'
                })
                imgPreview.setAttribute('src', e.currentTarget.getAttribute('src'))
                imgPreview.style.animation = 'fadeIn linear 0.3s'
                setTimeout(() => {
                    imgPreview.style.animation = 'unset'
                }, 300)
            })
        }