# Node Version Manager
# Guía para instalar NVM 
- https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/
#### Windows: 
- https://github.com/coreybutler/nvm-windows#readme
- ctrl + f: nvm-setup.exe

A veces, en algunas compus o versiones de windows, nvm no funciona. A mi me funcionó desinstalar node, y solo tener NVM.

Pero en mi computadora personal, tengo ambos. 

### Los comandos son los mismos en todos los S.O., lo distinto es instalarlo

Con NVM administro las versiones de node

```bash
nvm
nvm -v
nvm ls available #  Versiones de node disponibles PARA instalar
nvm list 
nvm ls # short
nvm i node # Instala la ultima version 
nvm i 16 # Instala la ultima version 16
# Pueden haber 16.9.45, 16.25.0
# Para instalar una versión en especifico
nvm i 16.25.3
nvm use 16 # Busca si tengo una versión 16 instalada, y la usa. 
# Si tengo más de una versión 16 instalada, tengo que ser especifico
nvm use 16.25.3
nvm current # Me devuelve la versión que estoy usando actualmente
```
## Lo más importante
### nvm use
Para usar, cambiar de versiones

### nvm i
para instalar versiones

### También, cambia la versión de NPM, compatible con esa versión

Si tiro este comando en las distintas versiones de node, voy a ver que la version de npm tambien cambia. Porque van de la mano
```bash
npm --v
```