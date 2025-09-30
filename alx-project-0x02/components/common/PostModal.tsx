import { useState } from "react";

interface PostModalProps {
  title?: string;
}

export default function PostModal({ title = "Create Post" }: PostModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [postContent, setPostContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Post submitted: ${postContent}`);
    setPostContent("");
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {title}
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md w-80">
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                placeholder="Write something..."
                className="border px-3 py-2 rounded"
                required
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
