'use client';

import CartProvider from './CartContext';
import FooterLinksProvider from './FooterLinksContext';
import { ProvidersModel } from '../models/context.model';

export function Providers({ children }: ProvidersModel) {
	return (
		<CartProvider>
			<FooterLinksProvider>{children}</FooterLinksProvider>
		</CartProvider>
	);
}

export default Providers;
