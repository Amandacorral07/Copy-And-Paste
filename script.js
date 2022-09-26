const btn = document.querySelector('.btn');
const coupon = document.querySelector('.coupon')


const copyText = (e) => {
    e.preventDefault()

    navigator.clipboard.writeText(coupon.value)
        .then(() => {
            btn.textContent= 'Copied!!'
            setTimeout(()=> {
                btn.textContent = "Copy"
            }, 1100)
        })
}


btn.addEventListener('click', copyText);