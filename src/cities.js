const images = { paris: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  london: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  berlin: 'https://images.unsplash.com/photo-1560930950-5cc20e80e392?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80' };

const cities = [
  { name: 'Paris', address: '16 Villa Gaudelet, 75011 Paris', slug: 'paris', img: images.paris },
  { name: 'London', address: '14-22 Elder St, London E1 6BT', slug: 'london', img: images.london },
  { name: 'Berlin', address: 'Rudi-Dutschke-Straße 26, 10969 Berlin', slug: 'berlin', img: images.berlin }
];

export default cities;
