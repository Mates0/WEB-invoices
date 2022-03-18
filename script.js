window.onload = () => {
    document.getElementById("addBtn").addEventListener("click", () => {
        fetch("http://164.92.142.211/87ec1114-49ae-4e04-9774-909f851ba57a/Invoices", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                to: document.getElementById("to").value,
                amount: document.getElementById("amount").value
            })
        }).then(res => {
            window.location.href = 'index.html'
        })
    })
}