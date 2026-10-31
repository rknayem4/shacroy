const API_URL = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:8000";

// Public: Get all active home sliders for visitor hero section
export async function getPublicSliders() {
  try {
    const res = await fetch(`${API_URL}/api/home-sliders`, {
      cache: "no-store", // Ensures fresh images are loaded
    });
    if (!res.ok) throw new Error("Failed to fetch public sliders");
    return await res.json();
  } catch (error) {
    console.error("Error fetching public sliders:", error);
    return []; // Return empty array on failure to prevent UI crash
  }
}