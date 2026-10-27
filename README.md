# To-Do List con Ionic y Angular

Aplicación móvil básica para registrar y administrar una lista de tareas pendientes. Cada tarea tiene un título y una descripción, y se puede agregar, editar y eliminar.

Proyecto desarrollado para la **Evaluación Sumativa de la Unidad 1** (Instituto Profesional San Sebastián).

## Tecnologías

| Tecnología | Uso |
|---|---|
| [Ionic](https://ionicframework.com/) 9 (`@ionic/angular` 9.0.0) | Componentes de interfaz móvil |
| [Angular](https://angular.dev/) 22.2.3 (componentes standalone) | Framework de frontend |
| Node.js y npm | Entorno de ejecución y gestor de paquetes |
| Ionic CLI (`@ionic/cli`) | Creación y ejecución del proyecto |
| HTML, CSS/SCSS y TypeScript | Estructura, estilos y lógica |
| Git y GitHub | Control de versiones |

## Funcionalidades

- **Agregar tareas** con título y descripción. El formulario se limpia automáticamente al guardar.
- **Editar tareas**: al presionar el ícono del lápiz, los datos pasan al formulario y el botón cambia a "Actualizar tarea".
- **Eliminar tareas** con el botón de basurero junto a cada una.
- **Validación básica**: no se puede guardar una tarea sin título.
- **Mensaje de lista vacía** cuando no hay tareas pendientes.

Las tareas se guardan en memoria, por lo que se pierden al recargar la página. El almacenamiento local forma parte de las siguientes unidades del curso.

## Requisitos previos

- [Node.js](https://nodejs.org/) y npm instalados.
- Ionic CLI instalado de forma global:

```bash
npm install -g @ionic/cli
ionic --version
```

> **Nota:** el paquete correcto es `@ionic/cli`. El paquete llamado `ionic` es una versión antigua y no reconoce las plantillas actuales.

## Instalación y ejecución

```bash
# 1. Clonar el repositorio
git clone https://github.com/b-varas/eva1_aplimov.git
cd eva1_aplimov

# 2. Instalar las dependencias
npm install

# 3. Levantar el servidor de desarrollo
ionic serve
```

La aplicación queda disponible en [http://localhost:8100](http://localhost:8100). Cada vez que se guarda un archivo, el navegador se recarga automáticamente.

Para verla como en un teléfono, abrir las herramientas del navegador (`F12`) y activar el modo dispositivo móvil (`Ctrl + Shift + M`).

## Cómo se creó el proyecto

```bash
ionic start eva blank --type=angular-standalone
```

- `blank`: plantilla en blanco, con una sola página.
- `angular-standalone`: Angular con componentes standalone, sin módulos `NgModule`.

## Estructura del proyecto

```
.
├── src/
│   ├── app/
│   │   ├── home/
│   │   │   ├── home.page.html   # Vista: formulario y lista de tareas
│   │   │   ├── home.page.ts     # Lógica: agregar, editar y eliminar
│   │   │   └── home.page.scss   # Estilos de la página
│   │   ├── app.component.ts     # Componente raíz
│   │   └── app.routes.ts        # Rutas (home como página principal)
│   ├── theme/
│   │   └── variables.scss       # Variables de color de Ionic
│   └── global.scss              # Estilos globales
├── angular.json                 # Configuración de compilación
├── package.json                 # Dependencias y scripts
└── .gitignore                   # Excluye node_modules y archivos generados
```

## Componentes de Ionic utilizados

| Componente | Función |
|---|---|
| `ion-header`, `ion-toolbar`, `ion-title` | Barra superior con el título |
| `ion-content` | Área principal con desplazamiento |
| `ion-item`, `ion-input`, `ion-textarea` | Campos del formulario (título y descripción) |
| `ion-button` | Guardar, editar y eliminar |
| `ion-list`, `ion-item` | Lista de tareas |
| `ion-label`, `ion-buttons`, `ion-icon` | Texto de cada tarea y botones con íconos |

## Cómo funciona

Cada tarea se modela con una interfaz de TypeScript:

```ts
interface Tarea {
  id: number;
  titulo: string;
  descripcion: string;
}
```

El `id` permite identificar con exactitud qué tarea se edita o se elimina. La lógica está en `home.page.ts`:

- `guardar()`: valida el título; si no hay una tarea en edición, crea una nueva, y si la hay, la actualiza. Luego limpia el formulario.
- `editar(t)`: carga los datos de la tarea en el formulario y guarda su `id` en `editandoId`.
- `eliminar(id)`: genera una lista nueva sin la tarea indicada.

Como el proyecto es standalone, cada componente de Ionic usado en la vista se importa en el decorador `@Component`. En Ionic 9 se importan desde `@ionic/angular`:

```ts
import { IonHeader, IonContent, IonList, IonItem } from '@ionic/angular';
```

## Problemas encontrados y soluciones

- **Comando `ionic` no encontrado (Arch Linux + fish):** se configuró un prefijo global de npm en el directorio del usuario y se agregó al `PATH` con `fish_add_path`, ya que las instrucciones para `.bashrc` no aplican en fish.
- **`npx ionic` instalaba una versión obsoleta (5.x):** se usó el paquete correcto, `@ionic/cli`.
- **Error `imports must be an array of components` con Ionic 9:** en Ionic 9 los componentes standalone se importan desde `@ionic/angular` y no desde `@ionic/angular/standalone`, que era la ruta de Ionic 8.
- **Puerto 22 bloqueado al hacer `git push` por SSH:** se cambió el remoto a HTTPS con un token de acceso personal.

## Próximos pasos

El proyecto se ampliará en las siguientes unidades con:

- Almacenamiento local de las tareas.
- Autenticación de usuarios.
- Comunicación con APIs externas.

## Autor

**[Brayan Varas Beltran]**
Asignatura: [Desarrollo de Aplicaciones Moviles]
Profesor: [Vicente Zapata]
Instituto Profesional San Sebastián
