const botonNo = document.getElementById("no");
const botonSi = document.getElementById("si");

const mensaje = document.getElementById("mensaje");
const imagen = document.getElementById("imagen");

const musica = document.getElementById("musica");

let intentos = 0;

const escenas = [

{
    mensaje: "🥺 ¿Segura?",
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXMxbjI4MTF0d2tsMW9tejhqMTI0Zm4wcHhqaWtsaDFnc3Ixd2J2dyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/uUnPYB37kLHvFnH4bi/giphy.gif"
},

{
    mensaje: "😌 Creo que te confundiste de botoncito, es el verde",
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2I1MXc5ZjNjZ3FzaWgyb2Q4Y3Q4NDljY2VtN3VneXg2YnY4aHA1eSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/s6X972xCgpHOvKXRZi/giphy.gif"
},

{
    mensaje: "😎 Te dejo que lo pienses, seguro estás nerviosa",
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnkxMnE2bjVtb3lvZnB5dWY3cDIweWFoYndwY2l2eTNqOTZmbmJqbyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/mbScAGRcQdpvIYPLbF/giphy.gif"
},

{
    mensaje: "🙈 Jk me dió su bendición",
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDZ6ZGJtaDA0azd4Nmd3NXl5d290dWRjem1kdGduNWJjOGF1bXBwNSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/imfDnU4fSYCHPrMI5H/giphy.gif"
},

{
    mensaje: "🙂‍↕️ Jk quiere verte feliz (conmigo)",
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDZ6ZGJtaDA0azd4Nmd3NXl5d290dWRjem1kdGduNWJjOGF1bXBwNSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/0t9b9QLLDyHJL8R0jF/giphy.gif"
},

{
    mensaje: "😒 No me hagas responderle a las demás",
    gif: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3emw0ZmI0N3VoYmxmZG0wcDM0d2RpdDgzaG9vYWg1YmV4Zm5kN3VncSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ClDNwhJ1xPm1SbcJp8/giphy.gif"
},

{
    mensaje: "💔 Me estas perdiendo",
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTV6ZTVzNG51azJuN3JkN3gxODgxOHN1ZmwzbW5jNTh4bXRnMTl0ayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XgB1iZOFFkUXbOhNXt/giphy.gif"
},

{
    mensaje: "🥺 Romperás mi corazoncito",
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmNtbjE4Mm5ueWVjcXI5YXp2cTU0Mjd2MjFndjI0NjN0b2dlcHA5NCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Lz6971fkGSgCMOOncl/giphy.gif"
},

{
    mensaje: "😔 Es enserio que no quieres salir conmigo",
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmNtbjE4Mm5ueWVjcXI5YXp2cTU0Mjd2MjFndjI0NjN0b2dlcHA5NCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/LdMWg0xQTfmcpFF5Yt/giphy.gif"
},

{
    mensaje: "😭 Me costó 5 horas",
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXNuaHJhNnNqb2M1bzBlYzdnMDd5ZmV2Mmg0am5sYWxkMWJ6MW1jaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/fdiOoSR8omN5RO36Yo/giphy.gif"
},

{
    mensaje: "👺 Te odio",
    gif: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3emw0ZmI0N3VoYmxmZG0wcDM0d2RpdDgzaG9vYWg1YmV4Zm5kN3VncSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ClDNwhJ1xPm1SbcJp8/giphy.gif"
},

{
    mensaje: "😼 Juro por JK que saldré con panchito",
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjhwbWlxbDQwcWpmc3ViNGxwYWphNXloc2ZoYWFlbDN2M3AzZGFuZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/LMQy30J8SFirRfOFd5/giphy.gif"
},

{
    mensaje: "🤭👋 ¡Ya lo juraste!",
    gif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXoyNnI0b2Ixamt6dXB3MjBqdXYyZG9kZnFjeDFia3U3bjJkdW0xeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/T70hpBP1L0N7U0jtkq/giphy.gif"
}

];

// Precargar todos los GIFs
escenas.forEach(escena => {
    const img = new Image();
    img.src = escena.gif;
});

// Mostrar el primer GIF al cargar

botonNo.addEventListener("mouseenter", () => {

    const x = Math.random() * 350 - 175;
    const y = Math.random() * 150 - 75;

    botonNo.style.transform = `translate(${x}px, ${y}px)`;

    if (intentos < escenas.length) {

        mensaje.textContent = escenas[intentos].mensaje;
        imagen.src = escenas[intentos].gif;

        intentos++;
    }

    const tamaño = Math.min(18 + intentos * 4, 80);

    botonSi.style.fontSize = tamaño + "px";
});

botonSi.addEventListener("click", () => {

    musica.play();

    document
        .getElementById("pantalla1")
        .classList.add("oculto");

    document
        .getElementById("pantalla2")
        .classList.remove("oculto");
});

document
    .getElementById("confirmar")
    .addEventListener("click", () => {

        const fecha =
            document.getElementById("fecha").value;

        const hora =
            document.getElementById("hora").value;

        const lugar =
            document.getElementById("lugar").value;

        document
            .getElementById("pantalla2")
            .classList.add("oculto");

        document
            .getElementById("pantalla3")
            .classList.remove("oculto");

        document
            .getElementById("resumen")
            .innerHTML = `
                📅 <b>${fecha}</b><br>
                ⏰ <b>${hora}</b><br>
                📍 <b>${lugar}</b>
            `;
    });

