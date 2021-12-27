type User = {
  name: string
  email: string
  address: {
    city: string
    state?: string
  },
}

function showWelcomeMessage(user: User) {
  return `Wellcome ${user.name}, your e-mail is ${user.email}. Your city is ${user.address.city} and your state is ${user.address?.state}`
}

showWelcomeMessage({
  name: 'Hugo Carmona',
  email: 'hugo.carmona@me.com',
  address: {
    city: 'Joinville',
    state: 'Santa Catarina'
  }
})