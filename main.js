const Photon = require('@generated/photon')

const photon = new Photon()

async function main() {
  await photon.connect()
  await photon.users.create({
    data: {
      name: 'Bob',
      preference: {
        create: {
          fontSize: 16,
        },
      },
    },
  })
  await photon.disconnect()
}

main()
