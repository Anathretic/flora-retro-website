import { createContext, useMemo, useState } from 'react';
import { FooterLinksContextModel, FooterProvidersProps } from '@/models/footer.model';

export const FooterLinksContext = createContext<FooterLinksContextModel | null>(null);

export function FooterLinksProvider({ children }: FooterProvidersProps) {
	const [showSpecialLinks, setShowSpecialLinks] = useState(false);

	const contextValue = useMemo(() => ({ showSpecialLinks, setShowSpecialLinks }), [showSpecialLinks]);

	return <FooterLinksContext.Provider value={contextValue}>{children}</FooterLinksContext.Provider>;
}

export default FooterLinksProvider;
