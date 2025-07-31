export type FooterItemModel = {
	href: string;
	content: string;
};

export type FooterLinksContextModel = {
	showSpecialLinks: boolean;
	setShowSpecialLinks: React.Dispatch<React.SetStateAction<boolean>>;
};
