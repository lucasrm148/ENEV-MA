export  async function Login(dados) {
    const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
    });
    const result = await response.json();
    return result;
}