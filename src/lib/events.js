const defaultStateError = () => {}

export const inputChange = (event, setstate, seterror=defaultStateError) => {
  try {
    const value = event.target.value
    const field = event.target.name

    setstate(state => ({...state, [field]: value}))
    seterror('')
  } catch (error) {
    console.error(error)
  }
}