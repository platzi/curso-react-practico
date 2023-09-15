# Prueba Tecnica

## 1. Maquetación de las vistas de usuario

### Descripcion General

- Página para hacer login (si el usuario no está autenticado)
- Página de Sign up para crear un nuevo usuario (si el usuario no está autenticado)
- Página con la información del usuario y botón para hacer logout (si el usuario ya está autenticado)

### Desgloce de Tareas

1. Maquetar interfaz de pagina `sign-in`.
2. Crear pagina `sign-up` y maquetar su interfaz.
3. Crear logica que obtenga y almacene un usuario en el almacenamiento local del navegador. La estructura del objeto almacenado seria la siguiente: 
  ```
  account: {
    name: String
    email: String
    password: String
  }
  ```
4. Crear logica que obtenga y almacene el estado del inicio de sesion en el almacenamiento local del navegador. La estructura del objeto almacenado seria la siguiente: 
  ```
  sign-out: Boolean
  ```
5. Añadir la funcionalidad de agregar un usuario al boton "**Create**" del formulario en la pagina `sign-up`, ademas almacenar el estado del inicio de sesion activo.
6. Crear logica que verifique si existe un usuario y si se encuentra auntenticado
7. Restringir acceso de las paginas `sign-in` y `sign-up` a usuarios auntenticados
8. Corregir url de enlace de "**Sign in**" en el `Navbar`
9. Maquetacion de boton "**Sign out**" en la `Navbar`
10. Añadir funcionalidad de salir de sesion al boton "**Sign out**" del `Navbar`
11. Añadir funcionalidad de iniciar sesion al boton "**Log in**" en la pagina `sign-in`
12. Restringir acceso de la pagina `my-account` para usuarios logueados
13. Maquetar interfaz de pagina `my-account`, la cual, debera mostrar "**nombre**" y "**email**" del usuario logueado.
14. Añadir ruta para editar cuenta de usuario. Se recomienda reutilizar la interfaz de la pagina `sign-up`
15. Cambiar ligeramente la interfaz de la pagina `sign-up` en caso se este editando el usuario actualmente autenticado. Se deben mostrar los valores del usuario en los inputs y cambiar el texto del boton "Create" por "Edit".

## 2. Navbar Dinámica

### Descripcion General

La navbar o menú principal de la aplicación debe cambiar su estructura dependiendo de si el usuario está autenticado o no:

- Mostrar el correo del usuario (si ya está autenticado)
- Mostrar botón para hacer Sign (si no está autenticado)

### Desgloce de Tareas

1. Mostrar correo de usuario autenticado en el componente `Navbar`
2. Mostrar los enlaces "**Sign out**", "**My Account**", "**My Orders**" y el "**email**" cuando un usuario se encuentre autenticado
3. Mostrar el enlace "**Sign in**" cuando NO haya un usuario autenticado

## 3. Protección de Rutas

### Descripcion General

Las rutas de Checkout, Órdenes de compra y Visualización de productos NO deben ser visibles para usuarios sin autenticar:

- Hacer redirect a la página de login si el usuario no está autenticado
- Mostrar común y corriente las páginas anteriormente mencionadas si el usuario ya está autenticado

### Desgloce de Tareas

1. Restringir acceso de las paginas `home`, `my-orders`, `my-order` y sus sub-rutas a usuarios auntenticados

## 4. Responsive Design para Shopi (Bonus)

### Desgloce de Tareas

1. Responsive design para componente `Navbar`
2. Responsive design para pagina `sign-in`
3. Responsive design para pagina `sign-up`
4. Responsive design para pagina `home`
5. Responsive design para componente `ProductDetail`
6. Responsive design para componente `CheckoutSideMenu`
7. Responsive design para pagina `my-account`
8. Responsive design para pagina `my-orders`
9. Responsive design para pagina `my-order`