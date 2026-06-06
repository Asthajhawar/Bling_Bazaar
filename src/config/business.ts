// Business configuration — change all contact info here
export const BUSINESS = {
  name: import.meta.env.VITE_BUSINESS_NAME as string,
  tagline: import.meta.env.VITE_BUSINESS_TAGLINE as string,
  phone: import.meta.env.VITE_PHONE as string,
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER as string,
  instagram: import.meta.env.VITE_INSTAGRAM as string,
  whatsappBaseUrl: 'https://wa.me/',
  email: '', // optional
} as const;

export function getWhatsAppLink(productName?: string): string {
  const base = `${BUSINESS.whatsappBaseUrl}${BUSINESS.whatsappNumber}`;
  if (productName) {
    const msg = encodeURIComponent(`Hi, I want to order ${productName}`);
    return `${base}?text=${msg}`;
  }
  return `${base}?text=${encodeURIComponent('Hi, I am interested in your jewellery collection!')}`;
}

export function getPhoneLink(): string {
  return `tel:${BUSINESS.phone.replace(/[^+\d]/g, '')}`;
}

export function getInstagramLink(): string {
  return `https://www.instagram.com/${BUSINESS.instagram}`;
}
