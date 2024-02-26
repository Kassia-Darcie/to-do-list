import React from 'react';

type ButtonProps = {
	full?: boolean;
	children: React.ReactNode;
};

export const Button = ({
	full = false,
	children,
	...rest
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
	return (
		<button
			className={`${
				full ? 'w-full' : ''
			} bg-blue-600 text-white rounded-md shadow-md py-1 px-6 block mx-auto mt-6`}
			{...rest}
		>
			{children}
		</button>
	);
};
