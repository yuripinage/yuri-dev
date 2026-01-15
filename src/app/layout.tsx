import type { Metadata } from 'next';
import './globals.css';
import { firsNeue, w95fa } from './fonts';

export const metadata: Metadata = {
	title: 'Yuri Pinagé',
	description: 'Senior Frontend Engineer',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${firsNeue.variable} ${w95fa.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
