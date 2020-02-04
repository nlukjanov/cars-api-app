const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Car = require('../models/carsModel')
// const carsSeed = require('../db/carsSeedsFile.json')
const User = require('../models/userModel')

mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, db) => {
    if (err) return console.log(err)
    db.dropDatabase()
      .then(() => {
        return User.create([
          {
            username: 'Nik',
            email: 'nik@mail',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            username: 'Kin',
            email: 'kin@mail',
            password: 'pass1',
            passwordConfirmation: 'pass1'
          }
        ])
      })
      .then(createdUsers => {
        console.log(`${createdUsers.length} users created`)
        return Car.create([
          {
            make: 'Audi',
            carModel: 'Q8',
            image:
              'https://cdn2.autoexpress.co.uk/sites/autoexpressuk/files/styles/gallery_adv/public/2018/08/1audiq8.jpg?itok=Csqoy1fc',
            safetyRating: 5,
            description:
              'The Audi Q8 combines the elegance of a four-door luxury coupé with the versatility of an SUV. The powerful front and the sloping roof line create dynamism. The sporty interior conveys a luxurious charm and, together with the optionally-adjustable rear seat, also offers plenty of space in the rear.',
            user: createdUsers[0],
            comments: [
              {
                text: 'first comment',
                user: createdUsers[0]
              },
              { text: 'another comment from seed', user: createdUsers[0] }
            ]
          },
          {
            make: 'Kia',
            carModel: 'Ceed',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/2018_Kia_Ceed_First_Edition_1.4_Front.jpg/2880px-2018_Kia_Ceed_First_Edition_1.4_Front.jpg',
            safetyRating: 4,
            description:
              "The Kia Ceed (styled as CEED; known as the Kia Cee'd before 2018) is a compact car produced by the South Korean manufacturer Kia Motors since 2006, exclusively for the European market.",
            user: createdUsers[0]
          },
          {
            make: 'VW',
            carModel: 'up!',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/2013_Volkswagen_Take_UP%21_1.0.jpg/2560px-2013_Volkswagen_Take_UP%21_1.0.jpg',
            safetyRating: 3,
            description:
              'The Up is a front-wheel drive with transverse engine mated to a five-speed manual gearbox and is 3.54 metres (139 in) long has a wheelbase of 2.42 m (95 in). The cabin is configured to four or five seats.',
            user: createdUsers[0]
          }
        ])
      })
      .then(createdCars => console.log(`${createdCars.length} cars created`))
      .catch(err => console.log(err))
      .finally(() => mongoose.connection.close())
  }
)
