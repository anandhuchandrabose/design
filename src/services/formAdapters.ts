import type { ContactFormValues, LeadFormValues } from '../types'

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

export async function onSubmitLead(values: LeadFormValues): Promise<void> {
  void values
  await wait(900)
}

export async function onSubmitContact(values: ContactFormValues): Promise<void> {
  void values
  await wait(1000)
}
