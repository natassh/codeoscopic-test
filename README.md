# Prueba Codeoscopic de Natacha

鈿涳笍 La aplicaci贸n est谩 desarrollada con React y TypeScript usando el boilerplate CRA.

馃挌 Lo he desplegado en Netlify, esta es el enlace para poder probarla: [Test Codeoscopic](https://codeoscopic-test.netlify.app/).

馃挏 Otra parte importante de este proyecto es la gesti贸n del estado. He gestionado los *TODOS* con Redux por dos razones. 

1. Porque tengo un ejercicio muy similar donde gestionaba el estado global con Contexts.
2. Porque en el contexto global solo quiero tener los datos que puedan cambiar entre componentes y para mi una parte importante de la aplicaci贸n son los *TODOS*.
Sin embargo, la llamada para obtener los colores no he considerado tenerla en el estado de modo que simplemente lo guardo en elcomponente que lo uso. Es un servicio que me devuelve unos datos que solo son para ese componente, no los necesito a nivel global de la aplicaci贸n.

猬咃笍鉃★笍 He desacoplado mi ui de los servicios de modo que mi vista no dependa de las llamadas a terceros.

馃拝 En cuanto a la maqueaci贸n, he aprovechado a darle unos estilos conforme a la p谩gina web de Codeoscopic.  

馃摫 La p谩gina es responsive.  

鈿欙笍 Los estilos los he gestionado con css, con PostCSS en este caso, he sobreescrito un poco la configuraci贸n de webpack con `craco` para poder dar soporte al plugin de PostCSS que me gusta, que es el `nesting-rules`.   

鉁? Contiene tests unitarios con JEST, tests de integraci贸n con Testing Library y test e2e con Cypress.

馃殌 Para levantar la aplicaci贸n:

- Modo desarrolo: `npm start`.
- Si quieres lanzar los tests de Cypres: `npm run cypress:open`.
- Si quieres lanzar los tests de JEST y Testing Library: `npm run test`.
### Thanks

馃懇鈥嶐煉? con 鉂わ笍 por [Natacha](https://www.linkedin.com/in/natacha-ivannikova-261478113/) 馃槉