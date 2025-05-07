'use client';

import FooterLinksProvider from './FooterLinksContext';
import { ProvidersModel } from '@/models/context.model';

export function Providers({ children }: ProvidersModel) {
	return <FooterLinksProvider>{children}</FooterLinksProvider>;
}

export default Providers;
