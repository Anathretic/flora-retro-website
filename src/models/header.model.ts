export type NavbarInstagramIconModel = {
	onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export interface NavbarItemModel {
	title: string;
	section: string;
	classProps?: string;
	onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export interface NavbarTitleModel {
	divRef: React.RefObject<HTMLDivElement | null>;
}

export interface HeaderModel {
	navbarItems: NavbarItemModel[];
}
