import { INCREASE, DECREASE, RESET } from 'app/actionsTypes/home.js'

const increase = () => ({ type: INCREASE })
const decrease = () => ({ type: DECREASE })
const reset = () => ({ type: RESET })

export {
  increase,
  decrease,
  reset
}