import "./globals.css";

export const metadata = {
	title: "Nandan Chakraborty | Backend Engineer",
	description: "Backend Engineer Portfolio",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
