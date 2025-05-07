import { createContext, useMemo, useState } from 'react';
import { FooterLinksContextModel } from '@/models/footer.model';
import { ProvidersModel } from '@/models/context.model';

export const FooterLinksContext = createContext<FooterLinksContextModel | null>(null);

export function FooterLinksProvider({ children }: ProvidersModel) {
	const [showSpecialLinks, setShowSpecialLinks] = useState(false);

	const contextValue = useMemo(() => ({ showSpecialLinks, setShowSpecialLinks }), [showSpecialLinks]);

	return <FooterLinksContext.Provider value={contextValue}>{children}</FooterLinksContext.Provider>;
}

export default FooterLinksProvider;
