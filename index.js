function submitData(username, email){
    const formData = {
        name : username,
        email: email, 
      };
      
      // method: "POST" is missing from the object below
      const configurationObject = {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "accept": "application/json",
        },
        body: JSON.stringify(formData),
      };
      
      return fetch("http://localhost:3000/users", configurationObject)
        .then(function (response) {
          return response.json();
        })
        .then(function (object) {
            console.log(object)
            const id = object.id
            const node = document.createElement("p");
            node.append(id);
            document.body.append(node)
            //element.append()
        })
        .catch(function (object) {
            console.log(object)
            const msg = object.message
            const node = document.createElement("p");
            node.append(msg);
            document.body.append(node)
            //element.append()
        })
    }
