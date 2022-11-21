import { createApp, ref } from "vue"
import Prompt from "./Prompt"

export const createPrompt = (text: string) => {
  const div = document.createElement('div')
  document.body.appendChild(div)

  const app = createApp({
    setup() {
      const visible = ref(false)
      
      return () => (
        <Prompt v-if="visible">{text}</Prompt>
      )
    }
  })

  const mounDialog = () => {
    app.mount(div)
    div.remove()
  }

  const unmounDialog = () => {
    app.unmount()
  }

  mounDialog()
}
