<img align="center" src="(https://user-images.githubusercontent.com/50127863/167978631-f5a512ac-5d09-4a3b-9477-3e0e38b0524e.png)"></a>
<p align="center"><img src="https://user-images.githubusercontent.com/50127863/167978631-f5a512ac-5d09-4a3b-9477-3e0e38b0524e.png" width="500"></p>

# UFABC TRACK: Uma aplicação web para notificar disponibilidade de matrículas em disciplinas da UFABC

A ferramenta funciona notificando o estudante por e-mail caso ocorra liberação de uma disciplina previamente selecionada. Para este projeto foram utilizadas tecnologias e arquiteturas de programação como: Java, JavaScript, MVC, Spring Framework, arquitetura limpa e infraestrutura em nuvem. Esta aplicação, ainda em estado prototipal, propõe umacontinuidade em projetos futuros.

<p align="center"><img src="https://user-images.githubusercontent.com/50127863/167979810-29a97483-8f97-41f0-b54a-220f12027c4f.PNG" width="500"></p>

## Arquitetura 
Um padrão arquitetural bem estabelecido é a utilização do Model-View-Controller (MVC) no desenvolvimento de aplicações web.
<p align="center"><img src="https://user-images.githubusercontent.com/50127863/167979213-cb8f5aa4-f4ed-4993-97ec-a3b4ea735d39.png" width="500"></p>




## Microserviços

A arquitetura foi desenvolvida com o padrão de desenvolvimento Microsserviços. Consiste na distribuição de uma aplicação em partes menores, cada pedaço é independente em seu desenvolvimento, manutenção e implantação. O UFABC Track foi dividido em cinco módulos distintos, estes são:

### Matricula-Detetive
Este módulo tem a função de monitorar as disciplinas disponibilizadas para matrícula e a alteração na quantidade de vagas. Utilizando os dados disponibilizados no site de matrícula através de dois endpoints (pontos de acesso a dados via protocolo HTTP), que são periodicamente consultados e persistidos com uso do MySQL. Ao ser identificada uma diferença na quantidade de vagas persistidas e o dado disponibilizado pela instituição é enviada uma mensagem através com o tópico "vaga alterada" para o RabbitMQ.
<a href="https://github.com/danieldjgomes/matricula-detetive" target="_blank">Repositório disponível aqui</a>

### Matricula-Front
Este módulo foi desenvolvido com o framework React constituído por uma aplicação de página única. O usuário interage com o sistema por tabelas e botões, através do computador ou por dispositivos móveis. É possível visualizar as disciplinas disponíveis para matrícula e se cadastrar para receber notificações sobre ela, tal como cancelar as notificações através do link disponibilizado no e-mail.
<a href="https://github.com/danieldjgomes/matricula-front" target="_blank">Repositório disponível aqui</a>

### Matricula-API
Módulo responsável por transmitir as ações do usuário no front-end para os outros módulos do projeto e persisti-las.
<a href="https://github.com/danieldjgomes/matricula-api" target="_blank">Repositório disponível aqui</a>

### Matricula-Gerenciador-De-Mensagens
Módulo que consome as mensagens de alteração enviadas pelo “Detetive” e a busca pelos usuários que estão cadastrados para receber notificações. Ao definir os alvos das notificações, será enviada uma mensagem através do tópico “Notificar cadastrados'' para o RabbitMQ.
<a href="https://github.com/danieldjgomes/matricula-gerenciador-de-mensagem" target="_blank">Repositório disponível aqui</a>

### Matricula-Notificador
Módulo que consome as mensagens de notificações enviadas pelo gerenciador de mensagens. Os usuários através de um servidor Simple Mail Transfer Protocol (SMTP, isto é Protocolo simples de transferência de e-mail) recebem o e-mail com os dados da disciplina que houve uma alteração na quantidade de vagas da mesma.
<a href="https://github.com/danieldjgomes/matricula-notificador" target="_blank">Repositório disponível aqui</a>


## Stack utilizada
**Front-end:** React, Bootstrap

**Back-end:** Java 11, Spring 5, RabbitMQ

**Cloud:** Amazon Web Service(AWS), Heroku, Vercel
