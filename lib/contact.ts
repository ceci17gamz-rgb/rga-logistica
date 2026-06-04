export const contact = {
  email: "Rgalogisticsal@gmail.com",
  phone: "+52 55 7834 0580",
  phoneTel: "+525578340580",
  role: "Jefe de Operaciones y Logística",
  location: "Ciudad de México y Lázaro Cárdenas, Michoacán, México",
} as const;

export const contactLinks = {
  mailto: `mailto:${contact.email}`,
  tel: `tel:${contact.phoneTel}`,
} as const;
