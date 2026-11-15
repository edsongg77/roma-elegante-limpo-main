export const WHATSAPP_NUMBER = "393397410650";
export const PHONE_DISPLAY = "+39 339 741 0650";
export const EMAIL = "giuliadgdsilva@gmail.com";

export const WHATSAPP = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá! Gostaria de um orçamento.",
)}`;

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
