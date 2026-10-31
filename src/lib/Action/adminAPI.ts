const API_URL = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:8000";

// 1. Get all slider images
export async function fetchSliders() {
  try {
    const res = await fetch(`${API_URL}/api/home-sliders`, {
      cache: "no-store", // Ensures fresh data
    });
    if (!res.ok) throw new Error("Failed to fetch sliders");
    return await res.json();
  } catch (error) {
    console.error("Error fetching sliders:", error);
    throw error;
  }
}

// 2. Upload new slider image
export async function uploadSlider(formData: FormData) {
  try {
    const res = await fetch(`${API_URL}/api/home-sliders`, {
      method: "POST",
      body: formData,
    });
    if (!res.ok) throw new Error("Failed to upload slider");
    return await res.json();
  } catch (error) {
    console.error("Error uploading slider:", error);
    throw error;
  }
}

// 3. Delete slider image by ID
export async function deleteSlider(id: string) {
  try {
    const res = await fetch(`${API_URL}/api/home-sliders/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Failed to delete slider");
    return await res.json();
  } catch (error) {
    console.error("Error deleting slider:", error);
    throw error;
  }
}