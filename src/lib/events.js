export const inputChange = (event, setstate, seterror) => {
  try {
    const value = event.target.value
    const field = event.target.name

    setstate(oldstate => ({...oldstate, [field]: value}))

    if (typeof seterror === 'function') {
      seterror('')
    }
  } catch (error) {
    console.error(error)
  }
}