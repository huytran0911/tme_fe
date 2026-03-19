import { CONTENT_CODES, type ContentCode } from "@/lib/constants/contentCodes";
import { apiGet } from "@/lib/httpClient";

interface ApiEnvelope<T> {
  success: boolean;
  data: T;
  error: string | null;
  traceId: string | null;
}

export interface ContentDto {
  id: number;
  code: string;
  language: string;
  name: string;
  content: string;
  image: string;
  onMenu: boolean;
}

const CONTENT_BASE_URL = "/client/v1/contents";

export async function getContentByCode(code: ContentCode, language?: string): Promise<ContentDto | null> {
  try {
    const path = `${CONTENT_BASE_URL}/${encodeURIComponent(code || CONTENT_CODES.ABOUT_US)}`;
    const envelope = await apiGet<ApiEnvelope<ContentDto | null>>(path, {
      params: { lang: language },
      cache: "no-store",
    });

    if (!envelope.success) {
      throw new Error(envelope.error || "Khong tai duoc noi dung.");
    }

    return envelope.data ?? null;
  } catch (err) {
    // Swallow fetch errors (self-signed cert, network) and return null so builds/dev don't crash.
    return null;
  }
}
