export interface FooterItemModel {
	href: string;
	content: string;
}

export interface FooterLinksContextModel {
	showSpecialLinks: boolean;
	setShowSpecialLinks: React.Dispatch<React.SetStateAction<boolean>>;
}
