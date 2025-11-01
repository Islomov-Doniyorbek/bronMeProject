import { useState } from 'react';
import { Heart, Bookmark, HourglassIcon, CreditCard } from 'lucide-react';

const FeaturedBusinesses = () => {
  const [likedItems, setLikedItems] = useState<number[]>([]);

  const businesses = [
    {
      id: 1,
      paymentType: "Elektron",
      ePaymentType: "ClickUp",
      payment: "120 000",
      time: "11:00, 31.10.2025",
      category: "Soch olish",
      image: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 2,
      paymentType: "Naqd",
      ePaymentType: "",
      payment: "",
      time: "12:00, 31.10.2025",
      category: "Soqol olish",
      image: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 3,
      paymentType: "Naqd",
      ePaymentType: "",
      payment: "",
      time: "13:00, 31.10.2025",
      category: "Soch olish",
      image: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 4,
      paymentType: "Elektron",
      ePaymentType: "Paynet",
      payment: "70 000",
      time: "13:00, 31.10.2025",
      category: "Soch olish",
      image: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  const toggleLike = (itemId: number) => {
    setLikedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <div className="mb-20">
      <div className="space-y-4">
        {businesses.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
            <div className="relative">
              <img 
                src={item.image} 
                alt="barber"
                className="w-full h-48 object-cover"
              />
              <button 
                onClick={() => toggleLike(item.id)}
                className="absolute top-3 right-3 w-8 h-8 bg-black bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-opacity-30 transition-all"
              >
                {likedItems.includes(item.id) ? (
                  <Heart className="w-4 h-4 text-red-500 fill-current" />
                ) : (
                  <Bookmark className="w-4 h-4 text-white" />
                )}
              </button>
            </div>
            
            <div className="p-4">
              <p className="text-gray-800 text-sm mb-3 leading-relaxed">
                {item.category}
              </p>
              
              <div className=" space-x-2">
                <div className="flex items-center">
                  <HourglassIcon className="w-4 h-4 text-green-500 fill-current mr-1" />
                  <span className="text-sm font-medium text-gray-900">{item.time}</span>
                </div>
                <p className=" flex gap-2 items-center text-sm text-gray-500"><CreditCard/> {item.paymentType === "Elektron" ? `${item.paymentType}(${item.ePaymentType}): ${item.payment} so'm` : item.paymentType}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBusinesses;