import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="mx-auto w-full max-w-screen-xl min-h-screen px-2.5 md:px-20 flex items-center justify-center">
			<div className="w-full max-w-md border-2 border-black rounded-md shadow-[4px_4px_0px] p-8 bg-white" >
				<h2 className="text-2xl font-bold text-gray-800 mb-6">MVP Ticketing System</h2>
				<form action="">
					<div className="flex flex-col space-y-4">
						<div className="grid w-full max-w-sm items-center">
							<label htmlFor="email">Email</label>
							<input className="border rounded-sm px-3 py-1" type="email" name="email" id="email" autoComplete="true" />
						</div>
						<div className="grid w-full max-w-sm items-center">
							<label htmlFor="password">Password</label>
							<input className="border rounded-sm px-3 py-1" type="password" name="password" id="password" />
						</div>


						<Link
							href={"/dashboard"}
							className="bg-red-600 text-white rounded-sm py-1 font-medium text-center">
							Log in
						</Link>
					</div>
				</form>
			</div>
		</main>
	);
}
