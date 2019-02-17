const pruebaReducer = (state, action) => {
  switch (action.type) {
    case 'PRUEBA':
      const prueba = action.payload.prueba

      return {
        ...state,
        hola: prueba
      }
    default:
      return state
  }
}

export default pruebaReducer
