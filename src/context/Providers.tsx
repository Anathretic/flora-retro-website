'use client';

import { FooterProvidersProps } from '@/models/footer.model';
import FooterLinksProvider from './FooterLinksContext';

export function Providers({ children }: FooterProvidersProps) {
	return <FooterLinksProvider>{children}</FooterLinksProvider>;
}

export default Providers;
