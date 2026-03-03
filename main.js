document.documentElement.innerHTML = `
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

header {
    margin-top: 24px;
    text-align: center;

}

body {
    background-color: rgb(235, 235, 235);
}
.container {
    background-color: #fff;
    display: block;
    max-width: 680px;
    margin: 0 auto;
}

.container, h1,h2 {
    text-align: center;
}

p {
    text-align: justify;
}

.fotoJason {
    max-width: 480px
}
    </style>

    <title>Pagina 98% em Javascript</title>
</head>
<header>
        <div class="container">
            <h1 class="title"> Aqui o JavaScript Domina </h1>
            <h2 Exemplo 2 como CSS dentro da pagina html que está dentro do json
        </div>

</header>
    <body>
        <div class="container">
            <h2>Aqui começa o site</h2>
            <img class="fotoJason" src="./img/capa_youtb 03.jpg" alt="Foto do Mestre Jason Developer">

        <p class="texto">Essa é a parte mais legal é que do nada me veio a vontade de fazer uma página assim.</p>
        </div>

    </body>
    </html>
    `;