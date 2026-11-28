export function initials(name?: string | null) {
  if (!name) return "V";
  return name.trim().split(/\\s+/).slice(0, 2).map(part => part[0]?.toUpperCase()).join("");
}