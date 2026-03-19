const UPLOAD_URL = "/admin/v1/files/upload-public";

export interface UploadFileData {
  url: string | null;
  path: string | null;
  fileName: string | null;
  size: number;
  contentType: string | null;
}

export interface UploadResponse {
  success: boolean;
  data: UploadFileData | null;
  error?: {
    message?: string;
  } | null;
  traceId?: string | null;
}

export async function uploadFile(file: File, module?: string): Promise<UploadResponse> {
  const formData = new FormData();
  formData.append("file", file);

  // Use admin API domain for upload (port 7000 for local dev)
  const ADMIN_API_URL = process.env.NEXT_PUBLIC_ADMIN_API_URL || "https://localhost:7000";

  // Build URL with optional module query param
  const url = new URL(`${ADMIN_API_URL}${UPLOAD_URL}`);
  if (module) {
    url.searchParams.set("module", module);
  }

  console.log("[upload] Uploading file:", file.name, "to:", url.toString());

  try {
    const res = await fetch(url.toString(), {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    console.log("[upload] Response status:", res.status, "data:", data);

    if (!res.ok) {
      // Handle rate limit (429)
      if (res.status === 429) {
        return {
          success: false,
          data: null,
          error: { message: "Too many uploads. Please try again later." },
        };
      }

      return {
        success: false,
        data: null,
        error: { message: data.error?.message || data.message || "Upload failed" },
      };
    }

    return data as UploadResponse;
  } catch (error) {
    return {
      success: false,
      data: null,
      error: { message: error instanceof Error ? error.message : "Upload failed" },
    };
  }
}
