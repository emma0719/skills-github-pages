import NavBar from '../components/NavBar';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-pink">
      <NavBar />
      <main className="max-w-2xl mx-auto mt-20 text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to Our Website</h1>
        <p className="text-lg text-gray-600">
          This is a sample homepage built with Next.js and Tailwind CSS.
        </p>
      </main>
    </div>
  );
}
