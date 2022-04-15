function contaCriar() {
    document.getElementById("login").innerHTML = `<form action="../backend.php" method="post">
    <label for="email">Nome</label><br>
    <input type="text" name="" id=""><br>
    <label for="Senha">Número de Registro</label><br>
    <input type="number" name="" id=""><br>
    <label for="telefone"Telefone>Telefone</label><br>
    <input type="tel" name="" id="">
    <label for="email">Email</label>
    <input type="email" name="" id="">
    <label for="senha">Senha</label>
    <input type="password">
    <label for="senha">Confirmar senha</label>
    <input type="password">
    </form>
    <button onclick="contaCriar()" disabled="disabled" id="btn1">Criar conta</button> / <button id="btn2" onclick="logarConta()">Login In</button>
`
    console.log("Clicou no botão")
}
function logarConta() {
    document.getElementById("login").innerHTML = `<label for="email">Email</label><br>
    <input type="email" name="" id=""><br>
    <label for="Senha">Senha</label><br>
    <input type="password" name="" id=""><br>
    </form>
    <button onclick="contaCriar()" id="btn1">Criar conta</button> / <button disabled="disabled" id="btn2" onclick="logarConta()">Login In</button>        
`
}
// You may use this version of code for personal use only.  You may not use it for commercial use. Law No. 9,610, OF FEBRUARY 19, 1998 of the Brazilian penal code.