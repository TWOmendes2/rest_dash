import moment from "moment/moment";

export const cardsData = [
  {
    title: "Total em Vendas",
    change: 24,
    amount: 42056,
  },
  {
    title: "Lucro Total",
    change: -14,
    amount: 28125.03,
  },
  {
    title: "Pagamento Funcionários",
    change: 18,
    amount: 11216.5,
  },
  {
    title: "Capital de Giro",
    change: 12,
    amount: 1007125.0,
  },
];

export const ordersData = [
  {
    name: "Petit Gateu",
    type: "Parcial",
    items: 58,
    change: 290,
  },
  {
    name: "Vinho do porto",
    type: "Parcial",
    items: 12,
    change: 72
  },
  {
    name: "Caviar",
    type: "Parcial",
    items: 7,
    change: 70
  },
  {
    name: "Bolo de cast",
    type: "Parcial",
    items: 21,
    change: 15
  }
]


//* get the value in group number format
export const groupNumber = (number) => {
  return parseFloat(number.toFixed(2)).toLocaleString("en", {
    useGrouping: true,
  });
};


//* calendar Events
let eventGuid = 0
let todayStr = moment().format("YYYY-MM-DD")  // YYYY-MM-DD of today
export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'Reunião Equipe',
    start: todayStr + 'T07:30:00',

  },
  {
    id: createEventId(),
    title: 'Apresentação Vital',
    start: moment(todayStr).add(1, "days").format("YYYY-MM-DD") + 'T07:00:00'
  },
  {
    id: createEventId(),
    title: "Apresentação Lucas",
    start: moment(todayStr).add(2, "days").format("YYYY-MM-DD") + 'T09:45:00'
  },
  {
    id: createEventId(),
    title: "Aula Yana",
    start: moment(todayStr).add(3, "days").format("YYYY-MM-DD") + 'T07:20:00'
  },
  {
    id: createEventId(),
    title: "Pagamento Equipe",
    start: moment(todayStr).add(5, "days").format("YYYY-MM-DD") + 'T16:00:00'
  },
  {
    id: createEventId(),
    title: "Descanso",
    start: moment(todayStr).add(6, "days").format("YYYY-MM-DD") + 'T13:00:00'
  },
]

export function createEventId() {
  return String(eventGuid++)
}


// * tasks
export const boardData = {
  columns: [
    {
      id: 1,
      title: "Felipe",
      cards: [
        {
          id: 1,
          title: "Front-End",
          description: "Desenvolver designer"
        },
        {
          id: 2,
          title: "Imprementação",
          description: "Usar ReactJS"
        },
      ]
    },
    {
      id: 2,
      title: "Agnaldo",
      cards: [
        {
          id: 9,
          title: "UX/UI",
          description: "Redesigner da página",
        }
      ]
    },
    {
      id: 3,
      title: "Gustavo",
      cards: [
        {
          id: 10,
          title: "Back-End",
          description: "Tratar da implementação do banco de"
        },
        {
          id: 11,
          title: "Banco de dados",
          description: "Reorganizar o fluxo de dados"
        }
      ]
    },
    {
      id: 4,
      title: "Gabriel",
      cards: [
        {
          id: 12,
          title: "Documentação",
          description: "Tratar da documentação final do projeto"
        },
      ]
    }
  ]
}


// * user table data
export const userData = [
  {
    name: {
      firstName: 'Carlos André',
      lastName: 'Lasenha à Molho Yap',
    },
    address: '3',
    city: 'Pix',
    state: '10:34:55',
  },
  {
    name: {
      firstName: 'Pedro Antunes',
      lastName: 'Vinho do porto',
    },
    address: '1',
    city: 'Pix',
    state: '16:41:09',
  },
  {
    name: {
      firstName: 'Izaac de Alencar',
      lastName: 'Caviar',
    },
    address: '8',
    city: 'Crédito',
    state: '12:30:15',
  },
  {
    name: {
      firstName: 'Francisco Vital',
      lastName: 'Petit Gateu',
    },
    address: '6',
    city: 'Dinheiro',
    state: '08:04:25',
  },
  {
    name: {
      firstName: 'Felipe Marcos',
      lastName: 'Bolo de Cast',
    },
    address: '5',
    city: 'Débito',
    state: '05:32:11',
  },
]