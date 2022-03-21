let container
let array = [];
window.onload = () => {
    container = document.getElementById('invoices-container')
    display()
}
function display() {
    container.innerHTML = ''
    fetch('http://164.92.142.211/87ec1114-49ae-4e04-9774-909f851ba57a/Invoices')
        .then(res => res.json())
        .then(invoices => {
            array = invoices;
            for (let i = 0; i < invoices.length; i++) {
                let div1 = document.createElement('div')
                let div2 = document.createElement('div')
                const one = ` <table class="table">
                    <thead>
                       <tr>    
                         <th scope="col" class="w-50">${invoices[i].to}</th> 
                         <th scope="col" class="w-50">${invoices[i].amount},-</th>`

                const two = `
                    <th scope="col" class="w-50"><div class="d-flex flex-row"> <input type="checkbox" checked id="${i + "box"}">  <button class="btn btn-danger d-flex justify-content-center" id="${i}">Delete</button></div> </th>     
                    </tr>
                     </thead>
                      </table>`
                const three = `
                      <th scope="col" class="w-50"><div class="d-flex flex-row"> <input type="checkbox" id="${i + "box"}">  <button class="btn btn-danger d-flex justify-content-center" id="${i}">Delete</button></div> </th>     
                      </tr>
                        </thead>
                    </table>`
                if (invoices[i].paid === true) {
                    div2.innerHTML += one + two
                } else div2.innerHTML += one + three

                div1.appendChild(div2)
                container.appendChild(div1)

                let checkbox = document.getElementById(i + "box")
                checkbox.addEventListener('click', (e) => {
                    e.preventDefault()
                    check(i)
                })
                let delBtn = document.getElementById(i + "")
                delBtn.addEventListener("click", (e) => {
                    e.preventDefault()
                    del(i)
                })
            }
        })
}

function del(input) {
    fetch('http://164.92.142.211/87ec1114-49ae-4e04-9774-909f851ba57a/Invoices/' + array[input].id, {
        method: 'DELETE'
    }).then(res => {
        display()
    })

}

function check(input) {
    fetch('http://164.92.142.211/87ec1114-49ae-4e04-9774-909f851ba57a/Invoices/' + array[input].id + "/Paid", {
        method: 'POST'
    }).then(res => {
        display()
    })
}
