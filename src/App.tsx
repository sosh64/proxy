import { useState, FormEvent } from "react";

const App = () => {
  const [query, setQuery] = useState("");
  const [iframeUrl, setIframeUrl] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

    if (urlPattern.test(query)) {
      const url = query.startsWith("http") ? query : `https://${query}`;
      setIframeUrl(url);
    } else {
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}&igu=1`;
      setIframeUrl(searchUrl);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 items-center justify-start py-8">
      <h1 className="text-lg font-medium mb-4">Proxy</h1>

      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter URL or search query..."
          className="border rounded px-3 py-1 outline-none w-64"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700"
        >
          Go
        </button>
      </form>

      <div className="flex gap-2 mb-4">
        <button onClick={() => setIframeUrl("https://py-jzpq.onrender.com/")} className="border px-3 py-1 rounded hover:bg-gray-100">
          Calculator
        </button>
        <button onClick={() => setIframeUrl("https://www.youtube.com")} className="border px-3 py-1 rounded hover:bg-gray-100">
          YouTube
        </button>
        <button onClick={() => setIframeUrl("https://www.tiktok.com")} className="border px-3 py-1 rounded hover:bg-gray-100">
          TikTok
        </button>
        <button onClick={() => setIframeUrl("https://www.xbox.com")} className="border px-3 py-1 rounded hover:bg-gray-100">
          Xbox
        </button>
      </div>

      {iframeUrl && (
        <iframe
          src={iframeUrl}
          title="Web Viewer"
          sandbox="allow-scripts allow-popups allow-forms"
          className="w-full max-w-4xl h-[600px] border rounded"
        />
      )}
    </div>
  );
};

export default App;
