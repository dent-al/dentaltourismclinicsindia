import React, { useContext, useState } from "react";
import { SEOContext } from "../contexts/SEOContext.jsx";

const SEOPage = () => {
  const { seoKeywords, seoSentences, setSEOKeywords, setSEOSentences } = useContext(SEOContext);
  const [keywordsInput, setKeywordsInput] = useState(seoKeywords.join(", "));
  const [sentencesInput, setSentencesInput] = useState(seoSentences.join("\n"));

  const handleSave = () => {
    setSEOKeywords(keywordsInput.split(",").map(k => k.trim()).filter(Boolean));
    setSEOSentences(sentencesInput.split("\n").map(s => s.trim()).filter(Boolean));
    alert("SEO keywords and sentences saved!");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-8">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">SEO Manager</h2>
      <div className="mb-6">
        <label className="block font-semibold mb-2 text-gray-700">SEO Keywords (comma separated)</label>
        <textarea
          value={keywordsInput}
          onChange={e => setKeywordsInput(e.target.value)}
          rows={2}
          className="w-full border border-gray-300 rounded-md p-2 mb-2"
          placeholder="dental tourism, best dental clinics, affordable dental care, India dental travel"
        />
      </div>
      <div className="mb-6">
        <label className="block font-semibold mb-2 text-gray-700">SEO Sentences (one per line)</label>
        <textarea
          value={sentencesInput}
          onChange={e => setSentencesInput(e.target.value)}
          rows={5}
          className="w-full border border-gray-300 rounded-md p-2"
          placeholder="Find the best dental clinics in India for international patients.\nAffordable dental care and world-class treatment for your smile."
        />
      </div>
      <button
        onClick={handleSave}
        className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition"
      >
        Save SEO Data
      </button>
      <div className="mt-8">
        <h3 className="text-lg font-bold mb-2 text-blue-600">Current SEO Keywords:</h3>
        <div className="mb-4 text-gray-800">{seoKeywords.join(", ")}</div>
        <h3 className="text-lg font-bold mb-2 text-blue-600">Current SEO Sentences:</h3>
        <ul className="list-disc pl-6 text-gray-800">
          {seoSentences.map((s, i) => <li key={i}>{s}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default SEOPage;
