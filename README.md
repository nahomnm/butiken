Butiken

En enkel e-handel applikation byggd i React. Användaren kan bläddra bland produkter, se produktdetaljer, lägga varor i en varukorg och genomföra ett köp via ett formulär. 

Produktdata hämtas från [Fake Store API](https://fakestoreapi.com).

#1 Kom igång lokalt

1. Klona repot:
    bash
    git clone https://github.com/nahomnm/butiken.git
    cd butiken

2. Installera paket:
    bash
    npm install

3. Starta servern:
    bash
    npm run dev

4. Öppna adressen som visas i terminalen
    http://localhost:5173.

#2 Funktioner

- Bläddra bland produkter hämtade från Fake Store API
- Se detaljerad information om en produkt
- Lägga till, ta bort och ändra antal av varor i varukorgen
- Varukorgen sparas i `localStorage` och finns kvar efter en omladdning
- Fylla i ett formulär för att slutföra köpet, med validering av namn, e-post och adress

#3 Uppfyllda krav

- Komponentstruktur: Sex komponenter med tydligt ansvar (`Header`, `ProductCard`, `ProductList`, `StatusMessage`, `CartItem`, `CheckoutForm`), separerade från sidor (`pages/`) och hjälpfunktioner (`utils/`).

- Routing: Fyra vyer (produktlista, produktdetalj, varukorg, kassa) via React Router, utan att sidan laddas om.

- State management: Delat state via `CartContext` (varukorgen), lokalt state för formulärfält och laddnings-/felstatus i respektive sida.

- Externt API-anrop: Hämtning från Fake Store API, med hantering av loading- och felfall.

- Formulär och validering: Kassaformulär med validering av obligatoriska fält och tydlig felåterkoppling.

- **Persistens:** Varukorgen sparas i 'LocalStorage' mellan sidladdningar.

#4 Teknik

- React
- React Router
- Vite
- Fake Store API