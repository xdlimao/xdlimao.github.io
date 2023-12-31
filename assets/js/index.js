const content = document.getElementById("contentdiv")

// Usar ' (apóstrofo) para passar argumentos no HTML e " (aspas) para passar atributos HTML

function quemsoueu(){
    content.innerHTML = '<p class="text-center"><img src="assets/images/perfil.png" id="eu"></p> <h4 class="text-center" id="sobremim"> Eu me chamo Daniel! Entusiasta da programação com profundo amor pelo aprendizado autodidata. Estou constantemente em busca de aprimorar minhas habilidades, explorar novas linguagens e tecnologias, e acompanhar as tendências da área. A programação é minha paixão e minha jornada de evolução nunca para, enquanto busco desafios para continuar crescendo e aprimorando minhas habilidades. </h4> <div class="container"> <div class="row"> <div class="col"> <img src="assets/images/linkedin_logo.png" id="linkedin"> </div> <div class="col" style="padding-top: 3rem;"> <h4 class="text-center" style="margin-left: 0;">Veja o meu <a href="https://www.linkedin.com/in/daniel-oliveira-de-souza-156748286">linkedin</a>!</h4> </div> </div> </div>'
}

function frontend(){
    content.innerHTML = '<ul class="list-group list-group-flush"> <li class="list-group-item"> <img src="assets/images/html5_css3_logo.png" id="htmlcss"> <h4 class="text-center">HTML + CSS</h4> </li> <li class="list-group-item"> <img src="assets/images/js_logo.png" id="js"> <h4 class="text-center">JS</h4> </li> <li class="list-group-item"> <img src="assets/images/bootstrap_logo.png" id="bootstrap"> <h4 class="text-center">Bootstrap</h4> </li> <li class="list-group-item"> <img src="assets/images/angularts_logo.png" id="angularts"> <h4 class="text-center">Angular + TS</h4> </li> <li class="list-group-item"> <img src="assets/images/sass_logo.png" id="sass"> <h4 class="text-center">Sass / Scss</h4> </li> </ul>'
}

function projetos(){
    content.innerHTML = '<div class="text-center"> <img src="assets/images/github_logo.png" id="github"> </div> <h1>Venha conferir meus projetos no <a href="https://github.com/xdlimao">github</a>!</h1>'
}

function backend(){
    content.innerHTML = '<ul class="list-group list-group-flush" style="margin-top: 3px;"> <li class="list-group-item"> <img src="assets/images/spring_logo.png" id="spring"> <h4 class="text-center">Spring</h4> </li> <li class="list-group-item"> <img src="assets/images/androidstudio_logo.png" id="androidstudio"> <h4 class="text-center">Android Studio</h4> </li> <li class="list-group-item"> <img src="assets/images/nodejs_logo.png" id="nodejs"> <h4 class="text-center">Node.js</h4> </li> <li class="list-group-item"> <img src="assets/images/sql_logo.png" id="tsql"> <h4 class="text-center">TSQL</h4> </li> </ul>'
}