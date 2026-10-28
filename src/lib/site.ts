export const WHATSAPP_MESSAGE = 'Olá, Marina! Vim pelo site e quero agendar uma consulta.'

export const WHATSAPP_URL = `https://wa.me/5596000000000?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export const HGD_URL = 'https://wa.me/5596991668700'

export const CRN = 'CRN-7 00000'

export const ADDRESS = {
  street: 'Av. FAB, 0000, Sala 00 · Centro',
  city: 'Macapá-AP',
}

export const INSTAGRAM = '@marinaalencar.nutri'

export const NAV_ITEMS = [
  { id: 'metodo', label: 'Método' },
  { id: 'consulta', label: 'Consulta' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'duvidas', label: 'Dúvidas' },
] as const
