
# Proyecto Web SUSALUD

Este proyecto se crea para la materia de Frontend del politecnico Gran colombiano, hace referencia a los siguientes mockups.

- [Figma](https://www.figma.com/design/s1Rm1ADqyRXj1ps2r8fraX/Proyecto-FRONT-END?node-id=0-1&t=7p8VTpxEOf3xOIUY-1)


## Authors

- [Yulian Antonio Hernandez Triana](https://www.github.com/YulianHernandezDev)
- [Luis Alejandro Gallo](https://www.github.com/lagallo647)


## Despliegue

Parea realizar el despligue se debe tener las siguientes tecnologias instaladas en computadador o server.
- Docker y Docker Compose
- Git

Los siguientes comandos realiza la clonacion del repocitorio a la maquina y el despliegue de complemetos para correr el sistema web.

```bash
  git clone https://github.com/YulianHernandezDev/ProyectoPoli.git
  cd ProyectoPoli/
  docker-compose up -- build
```
Si ya tiene las images descargadas de docker utiliza este comando. para recerar las imagenes por futuros cambios.
```bash
  docker-compose down -v && docker-compose up -- build
```
Recuerda quere si ejecutas en un servdidor dentro de la misma red deben habilitar los puerto para evitar inconvenientes. en ubuntu lo puedes hacer de la siguiente forma.

### Puertos en Uso.

- 5173 (Server React)
- 5432 (PosgreSQL)
- 8000 (FastApi)

```bash
  sudo ufw status
  sudo ufw enable
  sudo ufw allow 5173/tcp
  sudo ufw allow 5432/tcp
  sudo ufw allow 8000/tcp
```


