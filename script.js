let container

window.onload = () => {
    container = document.getElementById('students-container')
    test()
}

function test() {
    container.innerHTML = ''
    fetch('http://164.92.142.211/87ec1114-49ae-4e04-9774-909f851ba57a/Invoices')
        .then(res => res.json())
        .then(invoices => {
            for (let i = 0; i < invoices.length; i++) {
                let studentEl = document.createElement('div')
                let studentElBody = document.createElement('div')
                studentElBody.className = 'card-body'
                studentEl.className = 'card m-2'
                studentEl.style.width = '18rem'
                studentElBody.innerHTML = `
                    <h5 class="card-title">${invoices[i].to} ${invoices[i].amount}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">TEST</h6>
                    <a href="detail.html?student=${invoices[i].id}" class="btn btn-info">Detail</a>
                `
                studentEl.appendChild(studentElBody)
                container.appendChild(studentEl)
            }
        })
}