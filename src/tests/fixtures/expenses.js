import moment from 'moment'

const expenses = [
  {
    id: '1',
    description: "Gum",
    note: 'Mmmm - Chewy',
    amount: 195,
    createdAt: 0
  },
  {
    id: '2',
    description: "Rent",
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
  },
  {
    id: '3',
    description: "Credit Card",
    note: 'How much???',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
  },
  {
    id: '4',
    description: "Hardware",
    note: 'Renderer Unit',
    amount: 20000,
    createdAt: moment(0).add(5, 'days').valueOf()
  },
  {
    id: '5',
    description: "Hardware",
    note: '3D printer unit',
    amount: 22000,
    createdAt: moment(0).add(6, 'days').valueOf()
  }
]

export default expenses