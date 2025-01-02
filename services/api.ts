type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface ApiOptions extends RequestInit {
  endpoint: string;
  data?: Record<string, any> | null;
  method?: HttpMethod;
}

export interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
}

export const api = async <T>({
  endpoint,
  data = null,
  method = "GET",
}: ApiOptions): Promise<ApiResponse<T>> => {
  const baseURL = process.env.API_URL || "";
  const url = `${baseURL}${endpoint}`;

  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(url, options);

  return (await response.json()) as ApiResponse<T>;
};
