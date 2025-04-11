import NavBar from '../components/NavBar';

export default function MenuPage() {
  const menuItems = [
    {
      name: 'Mala Spicy Beef Dry Mix Noodle',
      description: 'Wide hand-pulled noodles with chili oil and garlic sauce.',
      price: '$12.95',
      image: 'images/malabeefdry.jpg'
    },
    {
      name: 'Cumin Lamb Dry Mix Noodle',
      description: 'Classic tomato and scrambled egg with handmade noodles.',
      price: '$11.50',
      image: 'images/cuminlambdry.jpg'
    },
    {
      name: 'Spicy Chicken Dry Mix Noodles',
      description: 'Cold chewy noodles with vinegar, cucumber, and gluten.',
      price: '$10.75',
      image: 'images/chickendry.jpg'
    },
    {
      name: 'Curry Chicken Dry Mix Noodles',
      description: 'Cold chewy noodles with vinegar, cucumber, and gluten.',
      price: '$10.75',
      image: 'images/currychicken.jpg'
    },
    {
      name: 'Mapo Tofu Dry Mix Noodles',
      description: 'Cold chewy noodles with vinegar, cucumber, and gluten.',
      price: '$10.75',
      image: 'images/mapodry.jpg'
    },
    {
      name: 'Pork Rib Dry Mix Noodles',
      description: 'Cold chewy noodles with vinegar, cucumber, and gluten.',
      price: '$10.75',
      image: 'images/porkribdry.jpg'
    },
    {
      name: 'Vegetable Dry Mix Noodles',
      description: 'Cold chewy noodles with vinegar, cucumber, and gluten.',
      price: '$10.75',
      image: 'images/veggiedry.jpg'
    }
    
  ];

  return (
    <div className="min-h-screen bg-red-50">
      <NavBar />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif sefont-bold mb-8 text-center color:red">Menu</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="border rounded-lg shadow-md overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                <p className="text-gray-600 mb-2">{item.description}</p>
                <p className="text-gray-900 font-bold">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
