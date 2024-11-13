import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

/* using extends cause we want to have props of div in the <Mobile> component in root page.tsx for better configuration */
interface MobileProps extends HTMLAttributes<HTMLDivElement> {
	imgSrc: string;
	dark?: boolean;
}

const Mobile = ({ imgSrc, className, dark = false, ...props }: MobileProps) => {
	return (
		<div
			className={cn(
				'relative pointer-events-none z-50 overflow-hidden',
				className
			)}
			{...props}
		>
			<img
				src={dark ? '/mobile-template-dark.png' : '/mobile-template-white.png'}
				className="pointer-events-none z-50 select-none"
				alt="Mobile image"
			/>

			<div className="absolute -z-10 inset-0">
				<img
					className="object-cover min-w-full min-h-full"
					src={imgSrc}
					alt="overlaying Mobile image"
				/>
			</div>
		</div>
	);
};

export default Mobile;
