import axios from "axios";
import { getVisRequestServer } from "./env";

/**
 * Generate a chart URL using the provided configuration.
 * @param type The type of chart to generate
 * @param options Chart options
 * @returns {Promise<string>} The generated chart URL.
 * @throws {Error} If the chart generation fails.
 */
export async function generateChartUrl(
  type: string,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  options: Record<string, any>,
): Promise<string> {
  console.error("Generating Chart", type);
  console.error("Generating Chart", type);
  const url = "https://antv-studio.alipay.com/api/gpt-vis";

  console.error("generateChartUrl", url);

  const response = await axios.post(
    url,
    {
      type,
      ...options,
      source: "mcp-server-chart",
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  const { success, errorMessage, resultObj } = response.data;

  console.error("Response Data", JSON.stringify(response.data));
  if (!success) {
    throw new Error(errorMessage);
  }

  return resultObj;
}
