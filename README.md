# React Native Boilerplate

## ***Introducción***
Boilerplate para una aplicación de React Native. Está basada en las siguientes librerias:

> * Expo @32.0.0
> * React @16.5.0
> * React Navigation @3.7.1
> * Redux @4.0.1
> * React Redux @6.0.1


## ***Estructura***
La estructura del Boilerplate consta de 2 carpetas principales
1. ***screens:*** tiene todas las vistas de la aplicación.
2. ***store:*** posee todo el 'store' de Redux. Adentro de la misma, tiene la carpeta de *actions*, la cual contiene todo lo relacionado con las acciones de Redux, y la carpeta *reducers*, la cual contiene todos los reducers que se emplearán en la aplicación. Adicional a eso, tiene un archivo llamado *configStore*, el cual es toda la configuración del store que se le pasará al **Provider** en el archivo *App*

![Estructura](https://i.ibb.co/2Zxs73r/Anotaci-n.png)

El Boilerplate cuenta con una vista en la cual ya se tiene implementado Redux con su respectivo *connect*, la cual se llama **ScreenWithReduxConnect**. Solo queda agregar las screens que se deseen, modificar la configuración de Redux según lo que se necesite y configurar las rutas de navegación, que de por sí solo se puede navegar entre el screen *Home* y *ScreenWithReduxConnect*.


## ***Instrucciones de Uso***
1. Lo primero que se deberá hacer es instalar las dependencias con:

```
 npm install
 ```

2. Luego de esto, se inicia expo con:
```
 npm start
 ```
O también con:
 ```
 expo start
 ```