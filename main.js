let count = 0
const spanNumber = document.getElementById("spanNumber")
const btns = document.querySelectorAll(".btn")

btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let value = e.target.textContent
        if (value === 'Reset') {
            count = 0
        } else if (value === 'Increase') {
            count++
        } else if (value === 'Decrease') {
            count--
        }
        if (count > 0) {
            spanNumber.style.color = '#aac293'
        } else if (count < 0) {
            spanNumber.style.color = '#D7C0AE'
        } else {
            spanNumber.style.color = '#7895B2'
        }
        spanNumber.innerHTML = count
    })
});