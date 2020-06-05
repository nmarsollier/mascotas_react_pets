# mascotas_react_pets

Modulo Pets para mascotas.

## Modo de uso

```bash
    "mascotas_react_pets": "git+https://github.com/nmarsollier/mascotas_react_pets.git#master",
```

## Dependencias

Esta librería no incluye dependencias internas, todas las dependencias definidas en package.json como devDependencies  deben ser incluidas en el proyecto mascotas_react_app como dependencies

## Uso local

En el proyecto donde quedamos usar este modulo, debemos cambiar

```bash
    "mascotas_react_pets": "git+https://github.com/nmarsollier/mascotas_react_pets.git#master",
```

por su directorio local:

```bash
    "mascotas_react_pets": "file:../mascotas_react_pets",
```

De este modo usaremos la version local, para que tome los cambios hay que hacer build

```bash
    npm run build
```
