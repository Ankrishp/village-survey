

export default function Home() {
 return (
  <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <h1 className="text-4xl font-bold">Welcome to the Village Survey</h1>
    <form className="mt-8 w-full max-w-md">
      <label className="block mb-4">
        <span className="text-gray-700">Name</span>
        <input

          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          placeholder="Enter your name"
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Feedback</span>
        <textarea
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          rows={4}
          placeholder="Share your thoughts about the village"
        ></textarea>
      </label>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
    </main>
 )
}
