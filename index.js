// GET all the data from the API and display each item’s title and id in the console using a loop.

// USING FOR EACH

async function getRequest() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    response.data.forEach((item) => {
      console.log(`ID: ${item.id}, Title: ${item.title}`);
    });
    if (response.status === 200) {
      console.log(`Get request successful`, response.status);
    } else {
      console.log(`Get request failed`, response.status);
    }
  } catch (error) {
    console.log(`error is caught`, error);
  }
}

getRequest();

// USING FOR LOOP

async function getRequest() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    for (let i = 0; i < response.data.length; i++) {
      const data = response.data[i];
      console.log(`ID: ${data.id}, Title: ${data.title}`);
    }
    if (response.status === 200) {
      console.log(`Get request successful`, response.status);
    } else {
      console.log(`Get request failed`, response.status);
    }
  } catch (error) {
    console.log("error is caugth", error);
  }
}

getRequest();

// POST a new item to the API. After successfully creating it,
// log the new item’s id and title.

async function postRequest() {
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        body: "this is the body",
        title: "Reeducate work",
        userId: 1,
      }
    );
    const data = response.data;
    console.log(`id: ${data.id} \ntitle: ${data.title}`);
    if (response.status === 201) {
      console.log(`Post request successful`, response.status);
    } else {
      console.log(`Post request failed`, response.status);
    }
  } catch (error) {
    console.log("error is caught", error);
  }
}

postRequest();

// PUT (update) an existing item. Log the updated item’s details.

async function putRequest(id) {
  try {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        title: "updated Reeducate work",
        body: `this is updated body`,
        userId: 1,
      }
    );
    const updatedResponse = response.data;
    console.log(updatedResponse);
    if (response.status === 200) {
      console.log(`Put request successful`, response.status);
    } else {
      console.log(`Put request failed`, response.status);
    }
  } catch (error) {
    console.log(`error is caught`, error);
  }
}

putRequest(1);

// DELETE an item, then log a confirmation message.

async function deleteRequest(id) {
  try {
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    console.log(`item with id: ${id} is deleted`);
    if (response.status === 200) {
      console.log(`Delete request successful`, response.status);
    } else {
      console.log(`Delete request failed`, response.status);
    }
  } catch (error) {
    console.log(`error is caugth`, error);
  }
}

deleteRequest(1);
