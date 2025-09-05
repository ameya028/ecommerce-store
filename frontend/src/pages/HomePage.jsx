import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";

const categories = [
	{ href: "/A", name: "ARDUINO UNO", imageUrl: "Arduino.png" },
	{ href: "/B", name: "RASPBERRY PI 4", imageUrl: "Rasspberry4.png" },
	{ href: "/C", name: "ARDUINO GIGA", imageUrl: "Arduinog.png" },
	{ href: "/D", name: "RASPBERRY PI 5", imageUrl: "Raspberry5.png" },
	{ href: "/E", name: "ARDUINO MKR", imageUrl: "Arduinom.png" },
	{ href: "/F", name: "ARDUINO NANO", imageUrl: "Arduinon.png" },
	{ href: "/G", name: "ARDUINO NICLA", imageUrl: "Arduinoni.png" },
	{ href: "/H", name: "ARDUINO PORTENTA", imageUrl: "Arduinop.png" },
];

const HomePage = () => {
	const { fetchFeaturedProducts, products, isLoading } = useProductStore();

	useEffect(() => {
		fetchFeaturedProducts();
	}, [fetchFeaturedProducts]);

	return (
		<div className='relative min-h-screen text-white overflow-hidden'>
			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<h1 className='text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4'>
					Explore Our Categories
				</h1>
				<p className='text-center text-xl text-gray-300 mb-12'>
					Discover the latest trends in hardware industries
				</p>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
					{categories.map((category) => (
						<CategoryItem category={category} key={category.name} />
					))}
				</div>

				{!isLoading && products.length > 0 && (
					<FeaturedProducts featuredProducts={products} />
				)}

				{/* Contact Section */}
				<div className="mt-16 text-center">
					<h2 className="text-2xl font-semibold text-emerald-400 mb-4">Contact Us</h2>
					<p className="text-lg text-gray-300">
						📞 Phone: <span className="font-medium">+91 90110 92299</span>
					</p>
					<p className="text-lg text-gray-300">
						✉️ Email: <span className="font-medium">Bitronics@gmail.com</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
