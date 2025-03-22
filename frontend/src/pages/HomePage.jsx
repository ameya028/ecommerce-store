import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";

const categories = [
	{ href: "/A", name: "Heavy-Duty Cast Iron Bench Vise", imageUrl: "A heavy-duty cast iron bench.png" },
	{ href: "/B", name: "Industrial-Grade Adjustable Wrench", imageUrl: "A heavy-duty cast iron gate latch.png" },
	{ href: "/C", name: "Cast Iron Door Hinge Set (4-Pack)", imageUrl: "A high-strength steel.png" },
	{ href: "/D", name: "Multi-Purpose Cordless Drill (18V)", imageUrl: "A powerful 18V cordless drill.webp" },
	{ href: "/E", name: "Cast Iron Wall-Mounted Tool Rack", imageUrl: "A set of four heavy-duty.png" },
	{ href: "/F", name: "Heavy-Duty Cast Iron Gate Latch", imageUrl: "A sturdy wall-mounted tool.png" },
	{ href: "/G", name: "Industrial-Grade Hammer with Fiberglass Handle", imageUrl: "An industrial-grade 16 oz hammer.png" },
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

				{!isLoading && products.length > 0 && <FeaturedProducts featuredProducts={products} />}
			</div>
		</div>
	);
};
export default HomePage;