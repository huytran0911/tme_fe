import { clsx, type ClassValue } from "clsx";

// Image base URL - can be CDN or static server (port 7000 = admin server for local dev)
const defaultImageBaseUrl = (
  process.env.NEXT_PUBLIC_IMAGE_BASE_URL ||
  process.env.NEXT_PUBLIC_ADMIN_API_URL ||
  "https://localhost:7000"
).replace(/\/$/, "");

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatDate(input?: string | null, format: "dd-MM-yyyy" | "dd/MM/yyyy" | "default" = "default") {
  if (!input) return "";
  const date = new Date(input);
  if (Number.isNaN(date.getTime()) || date.getFullYear() <= 1) return "";
  if (format === "dd-MM-yyyy" || format === "dd/MM/yyyy") {
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yyyy = date.getFullYear();
    const sep = format === "dd/MM/yyyy" ? "/" : "-";
    return `${dd}${sep}${mm}${sep}${yyyy}`;
  }
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function buildImageUrl(path?: string, baseUrl: string = defaultImageBaseUrl) {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;

  // Handle paths that start with "../" or "./" - strip the relative prefix
  let normalizedPath = path;
  while (normalizedPath.startsWith("../") || normalizedPath.startsWith("./")) {
    normalizedPath = normalizedPath.replace(/^\.\.?\//, "");
  }

  const normalizedBase = baseUrl.replace(/\/$/, "");
  return `${normalizedBase}${normalizedPath.startsWith("/") ? normalizedPath : `/${normalizedPath}`}`;
}
