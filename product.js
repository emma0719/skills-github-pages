import NavBar from '../components/NavBar';

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main className="flex flex-col items-center justify-center h-[80vh]">
        <h1 className="text-4xl font-bold mb-4">Products Page</h1>
        <p className="text-gray-600 text-lg">Welcome to our product section!</p>
      </main>
    </div>
  );
}
