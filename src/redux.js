import {
  createStore,
} from 'redux';

// ACTIONS
export const searchInput = (value) => ({
  type: 'SEARCH_INPUT',
  value
});

export const selectProfile = (value) => ({
  type: 'SELECT_PROFILE',
  value
})

// REDUCERS
export const reducers = (state = initialState, action) => {
  switch (action.type) {

    case 'SEARCH_INPUT':
      console.log(" -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --")
      console.log(" -- REDUCER -- SEARCH_INPUT | state: ", state)
      console.log(" -- REDUCER -- SEARCH_INPUT | action", action)
      console.log(" -- REDUCER -- SEARCH_INPUT | action.value", action.value)

      let filteredArray = [];
      // let upper = action.value.toUpperCase();
      // let lower = action.value.toLowerCase();
      let val;
      let val2;
      if (action.value.length > 0) {
        val = action.value.split('');
        let temp = val[0].toUpperCase();
        val[0] = temp;
        val = val.join('')

        val2 = action.value.split('');
        temp = val2[0].toLowerCase();
        val2[0] = temp;
        val2 = val2.join('')
      }
      // console.log(val);
      state.people.map((person, idx) => {
        if (person.name.includes(val) || person.name.includes(val2) || person.name.includes(action.value)) {
          filteredArray.push(person)
        }

      });
      // console.log(filteredArray)


      return Object.assign(
        {},
        state,
        {
          filteredPeople: filteredArray,
          peopleSearch: action.value
        }
      );

    case 'SELECT_PROFILE':
      console.log(" -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --")
      console.log(" -- REDUCER -- SELECT_PROFILE | state: ", state)
      console.log(" -- REDUCER -- SELECT_PROFILE | action", action)
      console.log(" -- REDUCER -- SELECT_PROFILE | action.value", action.value)

      return Object.assign(
        {},
        state,
        {
          selectedProfile: action.value
        }
      );

    default:
      return state;
  }
};

// INITIAL STATE
const initialState = {
  people: [
    { id: 1, name: 'Henry', city: 'Whitewater, WI', industry: 'Marketing', hobbies: 'Getting fired from Home Depot', email: 'henry@henry.com' },
    { id: 2, name: 'Dylan', city: 'Whitewater, WI', industry: 'Fraternity', hobbies: 'Shooting Pool', email: 'dylan@dylan.com' },
    { id: 3, name: 'Caleb', city: 'Oak Creek, WI', industry: 'Online Fraud', hobbies: 'Opening Loot boxes', email: 'caleb@caleb.com' },
    { id: 4, name: 'Zach', city: 'Oak Creek, WI', industry: 'Fraud Prevention', hobbies: 'Baseball', email: 'zach@zach.com' },
    { id: 5, name: 'Andy', city: 'Burlington, WI', industry: 'Sports Media', hobbies: 'Coaching', email: 'andy@andy.com' },
    { id: 6, name: 'Erin', city: 'Milwaukee, WI', industry: 'Software', hobbies: 'various hobbies', email: 'erin@erin.com' },
    { id: 7, name: 'Paul', city: 'Milwaukee, WI', industry: 'Software', hobbies: 'RPGs', email: 'paul@paul.com' },
    { id: 8, name: 'Alex', city: 'North Pole, North Pole', industry: 'Used Car Salesman', hobbies: 'Survival', email: 'helpimtrapped@gmail.com' },
    { id: 9, name: 'Nick', city: 'Franklin, WI', industry: 'Over-guillible consumer', hobbies: '700K term life at 22 no kids no assets, extensive video gaming, wearing no shirt but having the heat at 80 ', email: 'helpimveryguillable@gmail.com' },
    { id: 10, name: 'Maureen', city: 'Wauwautosa, WI', industry: 'checklists', hobbies: 'hounding software developers, meetings to plan meetings, sticky notes while driving', email: 'stickynotes4eva@gmail.com' },

  ],
  filteredPeople: [],
  peopleSearch: "",
  selectedProfile: "",
};

// STORE
export function configureStore(initialState = initialState) { // initialState = initialState | {}
  const store = createStore(reducers, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  return store;
};

export const store = configureStore();