Al correr: 
```bash
docker build -t nombre .
```

## ERROR: failed to connect to the docker API at npipe:////./pipe/dockerDesktopLinuxEngine; check if the path is correct and if the daemon is running: open //./pipe/dockerDesktopLinuxEngine: El sistema no puede encontrar el archivo especificado.


## ERROR
Your version of Windows Subsystem for Linux (WSL) is too old.
Run the command below to update or for more information, visit .the Microsoft WSL documentation

Para solucionar el error, correr este comando
```bash
wsl --update
```

![alt text](image-1.png)

## ERROR
Virtualization support not detected
Docker Desktop failed to start because virtualisation support wasn’t detected. Contact your IT admin to enable virtualization or check system requirements.

Docker no puede arrancar porque la virtualización está desactivada en la máquina.

Sin virtualización Docker Desktop NO funciona, porque usa máquinas virtuales

# ACTIVAR VIRTUALIZACION - SOLUCIONA ERRORES
![alt text](image-2.png)
## Con este vídeo se me solucionó el problema.
## https://youtube.com/shorts/L3pyyI7Fcng?si=CiVq2umvmRuB32cx

# ERROR: failed to build: failed to solve: failed to read dockerfile: open Dockerfile: no such file or directory
Si el archivo NO se llama exactamente *`Dockerfile`*, no lo encuentra


# 👎  Unable to pick a default driver. Here is what was considered, in preference order:
    ▪ docker: Not healthy: "docker version --format {{.Server.Os}}-{{.Server.Version}}:{{.Server.Platform.Name}}" exit status 1: failed to connect to the docker API at npipe:////./pipe/dockerDesktopLinuxEngine; check if the path is correct and if the daemon is running: open //./pipe/dockerDesktopLinuxEngine: El sistema no 
puede encontrar el archivo especificado.
    ▪ docker: Suggestion:  <https://minikube.sigs.k8s.io/docs/drivers/docker/>
    ▪ hyperv: Not healthy: Hyper-V requires Administrator privileges    
    ▪ hyperv: Suggestion: Right-click the PowerShell icon and select Run as Administrator to open PowerShell in elevated mode. <>
💡  Alternatively you could install 
one of these drivers:
    ▪ virtualbox: Not installed: unable to find VBoxManage in $PATH     
    ▪ qemu2: Not installed: exec: "qemu-system-x86_64": executable file 
not found in %PATH%
    ▪ podman: Not installed: exec: "podman": executable file not found in %PATH%

❌  Exiting due to DRV_NOT_HEALTHY: F
ound driver(s) but none were healthy. See above for suggestions how to fix installed drivers.

Este error ocurre cuando lanzamos el comando `minikube start` y no tenemos docker levantado