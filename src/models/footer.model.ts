import { ReactNode } from 'react';

export interface FooterItemsModel {
	href: string;
	content: string;
}

export interface FooterLinksContextModel {
	showSpecialLinks: boolean;
	setShowSpecialLinks: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface FooterProvidersProps {
	children: ReactNode;
}
