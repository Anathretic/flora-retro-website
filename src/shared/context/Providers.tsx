'use client';

import { ProvidersModel } from '../models/context.model';
import FooterLinksProvider from './FooterLinksContext';

export function Providers({ children }: ProvidersModel) {
	return <FooterLinksProvider>{children}</FooterLinksProvider>;
}

export default Providers;
