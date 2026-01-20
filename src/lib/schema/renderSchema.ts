import type { AnySchema } from "./types";

export function renderSchema(
  schema: AnySchema | AnySchema[] | null | undefined
): string {
  if (!schema) {
    return "";
  }

  const schemas = Array.isArray(schema) ? schema : [schema];

  const validSchemas = schemas.filter(Boolean);

  if (validSchemas.length === 0) {
    return "";
  }

  const schemaData =
    validSchemas.length === 1 ? validSchemas[0] : validSchemas;

  const jsonString = JSON.stringify(schemaData, null, 2);

  return `<script type="application/ld+json">${jsonString}</script>`;
}