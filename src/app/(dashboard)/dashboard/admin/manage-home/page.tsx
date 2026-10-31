"use client";

import React, { useState, useEffect } from "react";
import { HiTrash, HiUpload } from "react-icons/hi";
import toast from "react-hot-toast";
import { fetchSliders, uploadSlider, deleteSlider } from "@/lib/Action/adminAPI";

interface SliderItem {
  _id: string;
  title: string;
  imageUrl: string;
}

export default function HomeManagePage() {
  const [sliders, setSliders] = useState<SliderItem[]>([]);
  const [title, setTitle] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const loadSliders = async () => {
    try {
      const data = await fetchSliders();
      setSliders(data);
    } catch (error) {
      toast.error("Slider data fetch korte shomoshya hoyeche!");
    }
  };

  useEffect(() => {
    loadSliders();
  }, []);

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageFile) {
      toast.error("Doya kore ekti banner image select korun!");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", imageFile);

    try {
      await uploadSlider(formData);
      toast.success("Banner image safolvabe upload hoyeche!");
      setTitle("");
      setImageFile(null);
      loadSliders();
    } catch (error) {
      toast.error("Upload korte somoshya hoyeche.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Apni ki nischit ei banner-ti delete korte chan?")) return;

    try {
      await deleteSlider(id);
      toast.success("Banner safolvabe delete kora hoyeche!");
      loadSliders();
    } catch (error) {
      toast.error("Delete korte somoshya hoyeche.");
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold text-[#25332B]">
        Home Page Hero Section Management (1200x400px)
      </h1>

      {/* Upload Form */}
      <form
        onSubmit={handleUpload}
        className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 space-y-4"
      >
        <h2 className="text-lg font-semibold text-[#176B45]">
          Notun Banner Image Jog korun (Alt text hisebe title hobe)
        </h2>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Image Alt Text / Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Jemon: Eid Offer Banner..."
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#176B45]"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Image (Recommended 1200x400px)
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files?.[0] || null)}
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-[#E8F5EC] file:text-[#176B45] hover:file:bg-[#d5ebd9]"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center gap-2 bg-[#176B45] hover:bg-[#125638] text-white font-medium px-6 py.5 rounded-xl transition-all"
        >
          <HiUpload className="w-5 h-5" />{" "}
          {loading ? "Uploading..." : "Upload Banner"}
        </button>
      </form>

      {/* Existing Sliders List */}
      <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 space-y-4">
        <h2 className="text-lg font-semibold text-[#25332B]">
          Bortoman Banner Image-shumuh ({sliders.length})
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {sliders.map((slider) => (
            <div
              key={slider._id}
              className="border rounded-xl p-3 space-y-3 relative group bg-gray-50"
            >
              <div className="w-full aspect-[3/1] overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={slider.imageUrl}
                  alt={slider.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm font-medium text-gray-800 truncate">
                Alt/Title: {slider.title}
              </p>
              <button
                type="button"
                onClick={() => handleDelete(slider._id)}
                className="absolute top-5 right-5 bg-red-600 text-white p-2 rounded-full shadow hover:bg-red-700 transition"
                title="Delete"
              >
                <HiTrash className="w-4 h-4" />
              </button>
            </div>
          ))}
          {sliders.length === 0 && (
            <p className="text-gray-500 text-sm col-span-full text-center py-6">
              Kono banner image nei.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}