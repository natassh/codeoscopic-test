# Prueba Playtomic de Natacha

⚛️ La aplicación está desarrollada con React y TypeScript usando el boilerplate CRA.

💚 Lo he desplegado en Netlify, esta es el enlace para poder probarla: [Test Codeoscopic](https://codeoscopic-test.netlify.app/).

💜 Otra parte importante de este proyecto es la gestión del estado. He gestionado los *TODOS* con Redux por dos razones. 

1. Porque tengo un ejercicio muy similar donde gestionaba el estado global con Contexts.
2. Porque en el contexto global solo quiero tener los datos que puedan cambiar entre componentes y para mi una parte importante de la aplicación son los *TODOS*.
Sin embargo, la llamada para obtener los colores no he considerado tenerla en el estado de modo que simplemente lo guardo en elcomponente que lo uso. Es un servicio que me devuelve unos datos que solo son para ese componente, no los necesito a nivel global de la aplicación.

⬅️➡️ He desacoplado mi ui de los servicios de modo que mi vista no dependa de las llamadas a terceros.

💅 En cuanto a la maqueación, he aprovechado a darle unos estilos conforme a la página web de Codeoscopic.  

📱 La página es responsive.  

⚙️ Los estilos los he gestionado con css, con PostCSS en este caso, he sobreescrito un poco la configuración de webpack con `craco` para poder dar soporte al plugin de PostCSS que me gusta, que es el `nesting-rules`.   

✅ Contiene tests unitarios con JEST, tests de integración con Testing Library y test e2e con Cypress.

🚀 Para levantar la aplicación:

- Modo desarrolo: `npm start`.
- Si quieres lanzar los tests de Cypres: `npm run cypress:open`.
- Si quieres lanzar los tests de JEST y Testing Library: `npm run test`.
### Thanks

👩‍💻 con ❤️ por [Natacha](https://www.linkedin.com/in/natacha-ivannikova-261478113/) 😊