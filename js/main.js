axios
    .post('http://cards.danit.com.ua/login',
        {
          email: 'a@a.com',
          password: '12345'
        },
        // {
        //   headers: {
        //     'Authorization':'270b3dee7c06'
        //   }
        )
    .then(response => {
      debugger
      const token = response.data.token;
      axios
          .post('http://cards.danit.com.ua/cards',
              {
                title: "Визит к кардиологу",
                description: 'Плановый визит',
                doctor: "Cardiologist",
                bp: "24",
                age: 23,
                weight: 70
              },
              {
                headers: {
                  'Authorization': token
                }
              })
          .then(response => console.log(response.data));
    });


