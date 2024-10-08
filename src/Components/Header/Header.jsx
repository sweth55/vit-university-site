import { useState } from "react";
import { LuXCircle, LuMenu } from "react-icons/lu";
import Button from "../UI/Button";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="!z-50 mx-10 text-white font-inter font-medium">
			<div className="mx-auto px-10 lg:px-16 border border-gray-100 rounded-3xl h-full w-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 bg-white/5">
				<div className="flex justify-between items-center py-4">
					<div className="flex items-center">
						<span className="text-xl sm:text-2xl font-bold">
							<span className="text-primary">Vellore</span>{" "}
							University
						</span>
					</div>
					<div className="hidden xl:flex space-x-8 items-center">
						<a href="#" className="hover:text-primary-light">
							Home
						</a>
						<a href="#" className="hover:text-primary-light">
							WCU
						</a>
						<a href="#" className="hover:text-primary-light">
							Campuses
						</a>
						<a href="#" className="hover:text-primary-light">
							Axioms
						</a>
						<a href="#" className="hover:text-primary-light">
							Pricing
						</a>
						<a href="#" className="hover:text-primary-light">
							Contact
						</a>
						<a href="#" className="hover:text-primary-light">
							Testimonials
						</a>
						<a href="#">
							<Button variant="outlined" text="Join">
								<img
									className="w-7 pl-2"
									src="images/arrow.png"
									alt="Arrow"
								/>
							</Button>
						</a>
					</div>
					<div className="xl:hidden flex">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="text-primary focus:outline-none"
						>
							<LuMenu className="w-6 h-6 md:w-8 md:h-8" />
						</button>
					</div>
				</div>
			</div>

			<div
				className={`fixed z-50 top-1/2 -translate-y-1/2 right-0 w-64 h-[95%] text-white transition-transform transform backdrop-blur-md bg-white/5 rounded-l-lg ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<button
					className="absolute top-4 right-4 text-primary focus:outline-none"
					onClick={() => setIsOpen(false)}
				>
					<LuXCircle className="h-8 w-8" />
				</button>
				<nav className="mt-16 space-y-4">
					<a
						href="#"
						className="block px-4 py-2 text-sm hover:bg-primary-light hover:text-black"
					>
						Home
					</a>
					<a
						href="#"
						className="block px-4 py-2 text-sm hover:bg-primary-light hover:text-black"
					>
						WCU
					</a>
					<a
						href="#"
						className="block px-4 py-2 text-sm hover:bg-primary-light hover:text-black"
					>
						Campuses
					</a>
					<a
						href="#"
						className="block px-4 py-2 text-sm hover:bg-primary-light hover:text-black"
					>
						Axioms
					</a>
					<a
						href="#"
						className="block px-4 py-2 text-sm hover:bg-primary-light hover:text-black"
					>
						Pricing
					</a>
					<a
						href="#"
						className="block px-4 py-2 text-sm hover:bg-primary-light hover:text-black"
					>
						Contact
					</a>
					<a
						href="#"
						className="block px-4 py-2 text-sm hover:bg-primary-light hover:text-black"
					>
						Testimonials
					</a>
					<a
						href="#"
						className="flex px-4 py-2 text-md bg-primary-light text-black items-center justify-items-center"
					>
						<b>Join</b>
						<img src="images/arrow.png" alt="icon" width="30px" />
					</a>
				</nav>
			</div>
		</header>
	);
}
