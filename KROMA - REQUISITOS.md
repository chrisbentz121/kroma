# KROMA — E-Commerce de Moda Retro & Vintage Brutalista

> **Documentación Técnica, Auditoría UX/UI, Requisitos y Criterios de Aceptación**

Este documento recopila la especificación técnica completa, el análisis de interfaz/experiencia de usuario y la matriz de criterios para la plataforma e-commerce de **KROMA**, una marca enfocada en la curaduría y rescate de prendas retro (décadas 70s, 80s, 90s) bajo un modelo exclusivo de *Drops Semanales*.

---

## 1. Concepto y Estrategia de Diseño

La interfaz de **KROMA** utiliza un concepto de **Brutalismo Digital Pop/Retro**, imitando sistemas operativos retro (`MOOD.EXE`, ventanas emergentes, tipografía retro, etiquetas de aviso tipo adhesivo) combinado con contornos negros marcados y tarjetas superpuestas.

* **Público Objetivo:** Consumidores de moda vintage, entusiastas del coleccionismo y estética retro/Y2K.
* **Modelo de Negocio:** Lotes limitados de prendas con escasez programada (*"DROP DE LA SEMANA: QUEDAN 7 PIEZAS"*).
* **Navegación:** Landing page interactiva de desplazamiento vertical con navegación anclada (*Header fijo*) y carrusel de atributos.

---

## 2. Requisitos del Sistema

### 2.1 Requisitos Funcionales (RF)

* **RF-01 (Navegación Principal - Navbar):**

  * Menú superior con enlaces directos: `Inicio`, `Piezas`, `Beneficios`, `Testimonios`, `Contacto`.
  * Acceso continuo a la cesta de compras con indicador dinámico de cantidad (`BOLSA: [N]`).
  * Controles de navegación de carrusel/banner (`<` y `>`).
* **RF-02 (Gestión de Drops & Escasez):**

  * Notificador dinámico de inventario limitado en el banner principal (*Ej. "QUEDAN 7 PIEZAS"*).
  * Distintivos de estado como *"NEW DROP!"*.
* **RF-03 (Filtro por Época / Mood):**

  * Selector interactivo para filtrar el catálogo por décadas estilísticas: `70S`, `80S`, `90S`.
  * Botón directo de llamado a la acción: *"Descubre la colección"* y *"Cómo funciona KROMA"*.
* **RF-04 (Módulo Interactivo "MOOD.EXE"):**

  * Ventana simulada de sistema operativo retro con previsualización del look del día (`LOOK-DEL-DIA`).
  * Galería o carrusel de imágenes con estilos vintage, notas de textura y solapas/tonos.
* **RF-05 (Sección de Beneficios y Diferenciadores):**

  * Carrusel interactivo numerado (`01 Autenticidad revisada`, `02 Estilo sin esfuerzo`, etc.) con navegación lateral (`<` y `>`).
  * Call-to-action directo: *"Ver piezas disponibles"*.

---

### 2.2 Requisitos No Funcionales (RNF)

* **RNF-01 (Estilo Visual y Dirección de Arte):**
  * Mantenimiento estricto del estilo brutalista (bordes de $2\text{px}$ a $3\text{px}$ en color negro, sombras en bloque sin degradados y ventanas flotantes simuladas).
* **RNF-02 (Rendimiento de Imágenes):**
  * Las imágenes de alta resolución de la ropa vintage deben optimizarse en formato WebP para no penalizar la velocidad de carga.
* **RNF-03 (Responsividad y Usabilidad Mobile):**
  * Adaptación del diseño de ventanas superpuestas para pantallas móviles sin que se bloquee el contenido ni se solapen elementos interactivos clave.

---

## 3. Matriz de Criterios de Aceptación (C.A.)

| ID              | Sección / Función     | Criterio de Aceptación                                                                                                                                                 | Estado en Prototipo             |
| :-------------- | :---------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------ |
| **CA-01** | `Navbar & Header`     | Los enlaces de la barra superior deben desplazar suavemente al usuario (*Smooth Scroll*) a la sección correspondiente. El contador `BOLSA: N` se mantiene visible. | 🟢 Cumplido                     |
| **CA-02** | `Filtro de Década`   | Al presionar los botones `70S`, `80S` o `90S`, el catálogo inferior debe actualizar las prendas filtradas según la época seleccionada.                         | 🟡 Parcial (Falta interacción) |
| **CA-03** | `Ventana MOOD.EXE`    | La tarjeta de previsualización `LOOK-DEL-DIA` debe mostrar la descripción de materiales/estilo y permitir avanzar imágenes mediante flechas.                       | 🟢 Cumplido                     |
| **CA-04** | `Carrusel Beneficios` | Los botones de avance (`<` y `>`) deben alternar fluidamente entre los diferentes beneficios (`01`, `02`, etc.).                                                | 🟢 Cumplido                     |

---

## 4. Auditoría de UX/UI y Checklist de Funcionalidades

### 🟢 Funciones que Operan Correctamente (Puntos Fuertes)

* [X] 🟩 **Identidad de Marca Única:** La estética brutalista retro está muy bien ejecutada, diferenciando a KROMA de tiendas e-commerce genéricas.
* [X] 🟩 **Ganchos de Conversión (FOMO):** El indicador de stock restante ("QUEDAN 7 PIEZAS") genera urgencia de compra efectiva.
* [X] 🟩 **Propuesta de Valor Clara:** La sección *"Por qué elegir KROMA"* explica de forma transparente los beneficios de curaduría y autenticidad.
* [X] 🟩 **Jerarquía Tipográfica Retro:** Buen uso de tipografías estilo *pixel/monospaced* para los títulos de ventanas (`MOOD.EXE`, `LOOK-DEL-DIA`).

---

### 🟡 Aspectos a Mejorar (Oportunidades de Optimización)

* [ ] 🟨 **Claridad Visual de los Filtros de Época:** Los botones `70S`, `80S`, `90S` se pierden con el texto secundario; deben destacar claramente como botones interactivos.
* [ ] 🟨 **Contraste en Botones Secundarios:** Las flechas de navegación amarillas/naranjas (`>`) requieren un estado *Hover/Active* para dar retroalimentación al usuario.
* [ ] 🟨 **Cierre / Minimizado de Ventanas:** El ícono de caja en la ventana `LOOK-DEL-DIA` sugiere interacción de cerrar/minimizar; debe ser funcional o simplificarse.
* [ ] 🟨 **Superposición de Elementos en Móvil:** La tarjeta emergente `LOOK-DEL-DIA` tapa parte de la imagen principal; en pantallas pequeñas requerirá reordenamiento vertical.

---

## 5. Plan de Implementación (Roadmap GitHub)

```
[Fase 1: Prototipado Figma v2]  ──>  [Fase 2: Maquetación HTML/CSS]  ──>  [Fase 3: Git & GitHub]
   Ajustes de UI / Interacción           Estilo Brutalista Puro               Repositorio Final
```

### Checklist del Proyecto:

* [X] 🟦 **Etapa 1: Documentación de Requisitos y Análisis de UX/UI**
* [ ] 🟦 **Etapa 2: Figma v2 (Ajustes de Interacción y Pantallas Faltantes)**
  * [ ] Definir estados *Hover* y *Pressed* para el menú y los botones de épocas (`70S`, `80S`, `90S`).
  * [ ] Diseñar vista desplegada de la `BOLSA` (Carrito modal).
  * [ ] Diseñar plantilla de Ficha de Producto Individual.
* [ ] 🟦 **Etapa 3: Maquetación Web (HTML5 & CSS3 Puro)**
  * [ ] Implementar maquetación con CSS Grid / Flexbox para el estilo de ventanas superpuestas.
  * [ ] Aplicar bordes brutalistas y sombras sólidas con CSS sin librerías pesadas.
  * [ ] Hacer la maquetación 100% responsiva (Mobile-First).
* [ ] 🟦 **Etapa 4: Publicación en Repositorio**
  * [X] Redacción del archivo `README_KROMA.md`.
  * [ ] Carga final de código fuente y activos gráficos (`Upload file`).
