export type NavbarInstagramIconModel = {
	onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export type NavbarItemModel = {
	title: string;
	section: string;
	classProps?: string;
	onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export type NavbarTitleModel = {
	divRef: React.RefObject<HTMLDivElement | null>;
};

export type HeaderModel = {
	navbarItems: NavbarItemModel[];
};
