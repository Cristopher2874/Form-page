# Formulario de Ingeniería Frontend

Conocimiento en desarrollo frontend moderno usando:
- Next.js
- React Hook Form
- Zod
- Tailwind CSS
- TypeScript

### Características

1. **Implementación de Formulario Multi-paso**
   - Pages: Información Personal, Experiencia y Revisión
   - Progress indicator
   - Navigation across steps
   - Validation in-step

2. **Campos del Formulario**
   - **Paso de Información Personal:**
     - Nombre Completo (requerido)
     - Email (requerido, email válido)
     - Teléfono (requerido, formato válido)
     - Ubicación (requerido)
     - URL del Portafolio (opcional, URL válida)

   - **Paso de Experiencia:**
     - Rol Actual (requerido)
     - Años de Experiencia (requerido, número)
     - Habilidades (requerido, mínimo 3)
     - Empresa (requerido)
     - Descripción de Logros (requerido, mínimo 100 caracteres)

3. **Validación del Formulario**
   - Implementa esquemas Zod para validación
   - Muestra mensajes de error apropiados
   - Evita avanzar al siguiente paso si el actual es inválido

4. **Paso de Revisión**
   - Muestra toda la información ingresada
   - Permite editar pasos anteriores
   - Muestra confirmación antes del envío

5. **Estilizado**
   - Usa Tailwind CSS para el diseño
   - Hazlo visualmente atractivo
   - Asegura un diseño responsivo

### Características Adicionales

- Persistencia del formulario usando localStorage
- Estados de carga durante el envío
- Animaciones de transición entre pasos
- Implementación de límites de error
- Características de accesibilidad
- Pruebas unitarias

## Requisitos Técnicos

1. **Gestión de Estado**
   - Usa React Hook Form para el estado del formulario
   - Implementa tipos apropiados en TypeScript
   - Maneja la validación con Zod

2. **Calidad del Código**
   - Código limpio y bien organizado
   - Estructura apropiada de componentes
   - Seguridad de tipos
   - Manejo de errores
   - Comentarios donde sea necesario

3. **UI/UX**
   - Diseño profesional
   - Diseño responsivo
   - Estados de carga
   - Estados de error
   - Retroalimentación de éxito