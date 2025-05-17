// Mock data for the application

// Doctors data
export const doctors = [
  {
    id: 1,
    name: "Rajesh Sharma",
    specialization: "Ayurvedic Physician",
    specialties: ["Digestive Disorders", "Skin Conditions", "Stress Management"],
    address: "123 Health Street, Sector 15",
    city: "Delhi",
    phone: "+91 9876543210",
    rating: 4.8,
    image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    name: "Priya Patel",
    specialization: "Panchakarma Specialist",
    specialties: ["Detoxification", "Chronic Pain", "Arthritis"],
    address: "456 Wellness Avenue, Bandra West",
    city: "Mumbai",
    phone: "+91 9876543211",
    rating: 4.9,
    image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    name: "Anil Kumar",
    specialization: "Ayurvedic Neurologist",
    specialties: ["Headaches", "Sleep Disorders", "Neurological Conditions"],
    address: "789 Mind Lane, Koramangala",
    city: "Bangalore",
    phone: "+91 9876543212",
    rating: 4.7,
    image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    name: "Meena Gupta",
    specialization: "Ayurvedic Gynecologist",
    specialties: ["Women's Health", "Hormonal Imbalance", "Fertility"],
    address: "101 Balance Road, Salt Lake",
    city: "Kolkata",
    phone: "+91 9876543213",
    rating: 4.6,
    image: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 5,
    name: "Suresh Reddy",
    specialization: "Ayurvedic Cardiologist",
    specialties: ["Heart Health", "Hypertension", "Cholesterol Management"],
    address: "202 Heart Avenue, Jubilee Hills",
    city: "Hyderabad",
    phone: "+91 9876543214",
    rating: 4.9,
    image: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 6,
    name: "Anjali Singh",
    specialization: "Ayurvedic Dietitian",
    specialties: ["Weight Management", "Digestive Health", "Nutritional Planning"],
    address: "303 Diet Street, Gomti Nagar",
    city: "Lucknow",
    phone: "+91 9876543215",
    rating: 4.8,
    image: "https://images.pexels.com/photos/5214952/pexels-photo-5214952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

// Centers data (both Panchakarma and Yoga)
export const centers = [
  {
    id: 1,
    name: "Serenity Panchakarma Center",
    type: "panchakarma",
    services: ["Abhyanga", "Shirodhara", "Nasya", "Basti", "Virechana"],
    address: "456 Wellness Road, Indiranagar",
    city: "Bangalore",
    phone: "+91 9876543220",
    rating: 4.9,
    image: "https://images.pexels.com/photos/5317272/pexels-photo-5317272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    name: "Ayur Detox Panchakarma",
    type: "panchakarma",
    services: ["Udvartana", "Pinda Sweda", "Shirodhara", "Full Body Detox"],
    address: "789 Health Avenue, Malviya Nagar",
    city: "Delhi",
    phone: "+91 9876543221",
    rating: 4.7,
    image: "https://images.pexels.com/photos/8313348/pexels-photo-8313348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    name: "Balance Panchakarma Institute",
    type: "panchakarma",
    services: ["Pizhichil", "Kati Basti", "Navarakizhi", "Customized Treatments"],
    address: "101 Rejuvenation Street, Bandra",
    city: "Mumbai",
    phone: "+91 9876543222",
    rating: 4.8,
    image: "https://images.pexels.com/photos/8436564/pexels-photo-8436564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    name: "Peace Yoga Studio",
    type: "yoga",
    services: ["Hatha Yoga", "Ashtanga Yoga", "Pranayama", "Meditation"],
    address: "111 Peace Lane, Anna Nagar",
    city: "Chennai",
    phone: "+91 9876543223",
    rating: 4.9,
    image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 5,
    name: "Mind & Body Yoga Center",
    type: "yoga",
    services: ["Kundalini Yoga", "Yin Yoga", "Meditation", "Yoga Therapy"],
    address: "222 Mind Street, Aundh",
    city: "Pune",
    phone: "+91 9876543224",
    rating: 4.8,
    image: "https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 6,
    name: "Harmony Yoga & Wellness",
    type: "yoga",
    services: ["Vinyasa Flow", "Restorative Yoga", "Breathwork", "Sound Healing"],
    address: "333 Balance Road, Salt Lake",
    city: "Kolkata",
    phone: "+91 9876543225",
    rating: 4.7,
    image: "https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

// Health blog data
export const blogs = [
  {
    id: 1,
    title: "Understanding the Three Doshas: A Beginner's Guide to Ayurvedic Constitution",
    summary: "Learn about Vata, Pitta, and Kapha doshas and how understanding your unique constitution can help you achieve optimal health and wellness.",
    content: "",  // In real app, this would contain the full article content
    author: "Dr. Rajesh Sharma",
    date: "June 10, 2025",
    category: "ayurveda",
    featured: true,
    image: "https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    title: "The Benefits of Regular Yoga Practice for Mental Health",
    summary: "Discover how incorporating yoga into your daily routine can reduce stress, anxiety, and depression while improving overall mental wellbeing.",
    content: "",
    author: "Anjali Patel",
    date: "June 8, 2025",
    category: "yoga",
    featured: false,
    image: "https://images.pexels.com/photos/3759659/pexels-photo-3759659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    title: "Seasonal Eating: Ayurvedic Nutrition for Summer",
    summary: "Follow these Ayurvedic dietary guidelines to stay cool, hydrated, and balanced during the hot summer months.",
    content: "",
    author: "Dr. Meena Gupta",
    date: "June 5, 2025",
    category: "nutrition",
    featured: true,
    image: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    title: "The Science Behind Panchakarma Detoxification",
    summary: "Explore the scientific principles behind Ayurveda's comprehensive detoxification program and why it's effective for modern health issues.",
    content: "",
    author: "Dr. Anil Kumar",
    date: "June 3, 2025",
    category: "ayurveda",
    featured: false,
    image: "https://images.pexels.com/photos/3373716/pexels-photo-3373716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 5,
    title: "Meditation Techniques for Beginners",
    summary: "Start your meditation journey with these simple yet effective techniques that can be practiced anywhere, anytime.",
    content: "",
    author: "Ravi Shankar",
    date: "May 30, 2025",
    category: "yoga",
    featured: true,
    image: "https://images.pexels.com/photos/3094230/pexels-photo-3094230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 6,
    title: "Ayurvedic Home Remedies for Common Digestive Issues",
    summary: "Simple kitchen ingredients and Ayurvedic approaches to treat indigestion, bloating, and other common digestive complaints.",
    content: "",
    author: "Dr. Suresh Reddy",
    date: "May 28, 2025",
    category: "medical",
    featured: false,
    image: "https://images.pexels.com/photos/6941884/pexels-photo-6941884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 7,
    title: "The Connection Between Sleep and Immunity According to Ayurveda",
    summary: "Learn how proper sleep hygiene according to Ayurvedic principles can boost your immune system and overall health.",
    content: "",
    author: "Dr. Priya Patel",
    date: "May 25, 2025",
    category: "wellness",
    featured: false,
    image: "https://images.pexels.com/photos/4050318/pexels-photo-4050318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 8,
    title: "Pranayama Breathing Exercises for Respiratory Health",
    summary: "Strengthen your lungs and improve respiratory function with these traditional yogic breathing techniques.",
    content: "",
    author: "Anjali Singh",
    date: "May 22, 2025",
    category: "yoga",
    featured: false,
    image: "https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 9,
    title: "Understanding Ayurvedic Herbs: Benefits and Uses",
    summary: "An introduction to common Ayurvedic herbs and their therapeutic applications for various health conditions.",
    content: "",
    author: "Dr. Rajesh Sharma",
    date: "May 20, 2025",
    category: "ayurveda",
    featured: false,
    image: "https://images.pexels.com/photos/6157229/pexels-photo-6157229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];