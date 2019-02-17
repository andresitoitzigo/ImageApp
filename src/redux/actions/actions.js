const prueba = prueba => {
  console.log(prueba, 'Action')
  return {
    type: 'PRUEBA',
    payload: {
      prueba
    }
  }
}

export default prueba
