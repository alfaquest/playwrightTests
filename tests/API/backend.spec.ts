// tests/example.spec.ts
import { test, expect } from '../../fixtures'


test("GET /api/charts 200", async ({ request }) => {
  const response = await request.get("/api/charts", {
    headers: {
      Accept: "application/JSON"
    }
  }
  )
  await expect(response.status()).toBe(200);
  const body = await response.json();
  const expectedBody = {
    "charts": [
      {
        "name": "Chart 1",
        "created_at": 1631530148312,
        "modified_at": 1631530147312
      },
      {
        "name": "Chart 2",
        "created_at": 1617010419094,
        "modified_at": 1627284724744
      },
      {
        "name": "Chart 5",
        "created_at": 1622453396409,
        "modified_at": 1622453396409
      },
      {
        "name": "My awesome test 4",
        "created_at": 1622454043335,
        "modified_at": 1622454043335
      },
      {
        "name": "Test 3",
        "created_at": 1626174889659,
        "modified_at": 1626180305757
      }
    ]
  }
  await expect(body).toEqual(expectedBody);
}
)


test("GET /api/charts?order=asc 200", async ({ request }) => {
  const response = await request.get("/api/charts?order=asc", {
    headers: {
      Accept: "application/JSON"
    }
  }
  )
  await expect(response.status()).toBe(200);
  const body = await response.json();
  const expectedBody = {
    "charts": [
      {
        "name": "Chart 1",
        "created_at": 1631530148312,
        "modified_at": 1631530147312
      },
      {
        "name": "Chart 2",
        "created_at": 1617010419094,
        "modified_at": 1627284724744
      },
      {
        "name": "Chart 5",
        "created_at": 1622453396409,
        "modified_at": 1622453396409
      },
      {
        "name": "My awesome test 4",
        "created_at": 1622454043335,
        "modified_at": 1622454043335
      },
      {
        "name": "Test 3",
        "created_at": 1626174889659,
        "modified_at": 1626180305757
      }
    ]
  }
  await expect(body).toEqual(expectedBody);
}
)

test("GET /api/charts?order=desc 200", async ({ request }) => {
  const response = await request.get("/api/charts?order=desc", {
    headers: {
      Accept: "application/JSON"
    }
  }
  )
  await expect(response.status()).toBe(200);
  const body = await response.json();
  const expectedBody = {
    "charts": [
      {
        "name": "Test 3",
        "created_at": 1626174889659,
        "modified_at": 1626180305757
      },
      {
        "name": "My awesome test 4",
        "created_at": 1622454043335,
        "modified_at": 1622454043335
      },
      {
        "name": "Chart 5",
        "created_at": 1622453396409,
        "modified_at": 1622453396409
      },
      {
        "name": "Chart 2",
        "created_at": 1617010419094,
        "modified_at": 1627284724744
      },
      {
        "name": "Chart 1",
        "created_at": 1631530148312,
        "modified_at": 1631530147312
      }
    ]
  }
  await expect(body).toEqual(expectedBody);
}
)

test("GET /api/charts?orderBy=name 200", async ({ request }) => {
  const response = await request.get("/api/charts?orderBy=name", {
    headers: {
      Accept: "application/JSON"
    }
  }
  )
  await expect(response.status()).toBe(200);
  const body = await response.json();
  const expectedBody = {
    "charts": [
      {
        "name": "Chart 1",
        "created_at": 1631530148312,
        "modified_at": 1631530147312
      },
      {
        "name": "Chart 2",
        "created_at": 1617010419094,
        "modified_at": 1627284724744
      },
      {
        "name": "Chart 5",
        "created_at": 1622453396409,
        "modified_at": 1622453396409
      },
      {
        "name": "My awesome test 4",
        "created_at": 1622454043335,
        "modified_at": 1622454043335
      },
      {
        "name": "Test 3",
        "created_at": 1626174889659,
        "modified_at": 1626180305757
      }
    ]
  }
  await expect(body).toEqual(expectedBody);
}
)

test("GET /api/charts?orderBy=name&order=desc 200", async ({ request }) => {
  const response = await request.get("/api/charts?orderBy=name&order=desc", {
    headers: {
      Accept: "application/JSON"
    }
  }
  )
  await expect(response.status()).toBe(200);
  const body = await response.json();
  const expectedBody = {
    "charts": [
      {
        "name": "Test 3",
        "created_at": 1626174889659,
        "modified_at": 1626180305757
      },
      {
        "name": "My awesome test 4",
        "created_at": 1622454043335,
        "modified_at": 1622454043335
      },
      {
        "name": "Chart 5",
        "created_at": 1622453396409,
        "modified_at": 1622453396409
      },
      {
        "name": "Chart 2",
        "created_at": 1617010419094,
        "modified_at": 1627284724744
      },
      {
        "name": "Chart 1",
        "created_at": 1631530148312,
        "modified_at": 1631530147312
      }
    ]
  }
  await expect(body).toEqual(expectedBody);
}
)

test("GET /api/charts?orderBy=name&order=asc 200", async ({ request }) => {
  const response = await request.get("/api/charts?orderBy=name&order=asc", {
    headers: {
      Accept: "application/JSON"
    }
  }
  )
  await expect(response.status()).toBe(200);
  const body = await response.json();
  const expectedBody = {
    "charts": [
      {
        "name": "Chart 1",
        "created_at": 1631530148312,
        "modified_at": 1631530147312
      },
      {
        "name": "Chart 2",
        "created_at": 1617010419094,
        "modified_at": 1627284724744
      },
      {
        "name": "Chart 5",
        "created_at": 1622453396409,
        "modified_at": 1622453396409
      },
      {
        "name": "My awesome test 4",
        "created_at": 1622454043335,
        "modified_at": 1622454043335
      },
      {
        "name": "Test 3",
        "created_at": 1626174889659,
        "modified_at": 1626180305757
      }
    ]
  }
  await expect(body).toEqual(expectedBody);
}
)

test("GET /api/charts?orderBy=dateCreated 200", async ({ request }) => {
  const response = await request.get("/api/charts?orderBy=dateCreated", {
    headers: {
      Accept: "application/JSON"
    }
  }
  )
  await expect(response.status()).toBe(200);
  const body = await response.json();
  const expectedBody = {
    "charts": [
      {
        "name": "Chart 2",
        "created_at": 1617010419094,
        "modified_at": 1627284724744
      },
      {
        "name": "Chart 5",
        "created_at": 1622453396409,
        "modified_at": 1622453396409
      },
      {
        "name": "My awesome test 4",
        "created_at": 1622454043335,
        "modified_at": 1622454043335
      },
      {
        "name": "Test 3",
        "created_at": 1626174889659,
        "modified_at": 1626180305757
      },
      {
        "name": "Chart 1",
        "created_at": 1631530148312,
        "modified_at": 1631530147312
      }
    ]
  }
  await expect(body).toEqual(expectedBody);
}
)

test("GET /api/charts?orderBy=dateCreated&order=asc 200", async ({ request }) => {
  const response = await request.get("/api/charts?orderBy=dateCreated&order=asc", {
    headers: {
      Accept: "application/JSON"
    }
  }
  )
  await expect(response.status()).toBe(200);
  const body = await response.json();
  const expectedBody = {
    "charts": [
      {
        "name": "Chart 2",
        "created_at": 1617010419094,
        "modified_at": 1627284724744
      },
      {
        "name": "Chart 5",
        "created_at": 1622453396409,
        "modified_at": 1622453396409
      },
      {
        "name": "My awesome test 4",
        "created_at": 1622454043335,
        "modified_at": 1622454043335
      },
      {
        "name": "Test 3",
        "created_at": 1626174889659,
        "modified_at": 1626180305757
      },
      {
        "name": "Chart 1",
        "created_at": 1631530148312,
        "modified_at": 1631530147312
      }
    ]
  }
  await expect(body).toEqual(expectedBody);
}
)

test("GET /api/charts?orderBy=dateCreated&order=desc 500", async ({ request }) => {
  const response = await request.get("/api/charts?orderBy=dateCreated&order=desc", {
    headers: {
      Accept: "application/JSON"
    }
  }
  )
  await expect(response.status()).toBe(500);
  const body = await response.json();
  const expectedBody = {
    "error": "Currently no order by dateCreated descending has been implemented"
  }
  await expect(body).toEqual(expectedBody);
}
)


test("GET /api/charts?orderBy=dateModified 200", async ({ request }) => {
  const response = await request.get("/api/charts?orderBy=dateModified", {
    headers: {
      Accept: "application/JSON"
    }
  }
  )
  await expect(response.status()).toBe(200);
  const body = await response.json();
  const expectedBody = {
    "charts": [
      {
        "name": "Chart 5",
        "created_at": 1622453396409,
        "modified_at": 1622453396409
      },
      {
        "name": "My awesome test 4",
        "created_at": 1622454043335,
        "modified_at": 1622454043335
      },
      {
        "name": "Test 3",
        "created_at": 1626174889659,
        "modified_at": 1626180305757
      },
      {
        "name": "Chart 2",
        "created_at": 1617010419094,
        "modified_at": 1627284724744
      },
      {
        "name": "Chart 1",
        "created_at": 1631530148312,
        "modified_at": 1631530147312
      }
    ]
  }
  await expect(body).toEqual(expectedBody);
}
)

test("GET /api/charts?orderBy=dateModified&order=asc 200", async ({ request }) => {
  const response = await request.get("/api/charts?orderBy=dateModified&order=asc", {
    headers: {
      Accept: "application/JSON"
    }
  }
  )
  await expect(response.status()).toBe(200);
  const body = await response.json();
  const expectedBody = {
    "charts": [
      {
        "name": "Chart 5",
        "created_at": 1622453396409,
        "modified_at": 1622453396409
      },
      {
        "name": "My awesome test 4",
        "created_at": 1622454043335,
        "modified_at": 1622454043335
      },
      {
        "name": "Test 3",
        "created_at": 1626174889659,
        "modified_at": 1626180305757
      },
      {
        "name": "Chart 2",
        "created_at": 1617010419094,
        "modified_at": 1627284724744
      },
      {
        "name": "Chart 1",
        "created_at": 1631530148312,
        "modified_at": 1631530147312
      }
    ]
  }
  await expect(body).toEqual(expectedBody);
}
)

test("GET /api/charts?orderBy=dateModified&order=desc 200", async ({ request }) => {
  const response = await request.get("/api/charts?orderBy=dateModified&order=desc", {
    headers: {
      Accept: "application/JSON"
    }
  }
  )
  await expect(response.status()).toBe(200);
  const body = await response.json();
  const expectedBody = {
    "charts": [
      {
        "name": "Chart 1",
        "created_at": 1631530148312,
        "modified_at": 1631530147312
      },
      {
        "name": "Chart 2",
        "created_at": 1617010419094,
        "modified_at": 1627284724744
      },
      {
        "name": "Test 3",
        "created_at": 1626174889659,
        "modified_at": 1626180305757
      },
      {
        "name": "My awesome test 4",
        "created_at": 1622454043335,
        "modified_at": 1622454043335
      },
      {
        "name": "Chart 5",
        "created_at": 1622453396409,
        "modified_at": 1622453396409
      }
    ]
  }
  await expect(body).toEqual(expectedBody);
}
)

test("GET /api/charts?order=dateModified&orderBy=desc 400", async ({ request }) => {
  const response = await request.get("/api/charts?order=dateModified&orderBy=desc", {
    headers: {
      Accept: "application/JSON"
    }
  }
  )
  await expect(response.status()).toBe(400);
  const body = await response.json();
  const expectedBody = {
    "error": "Please check your request parameters"
  }
  await expect(body).toEqual(expectedBody);
}
)


test("GET /api/charts?order=dateModified&order=desc 400", async ({ request }) => {
  const response = await request.get("/api/charts?order=dateModified&order=desc", {
    headers: {
      Accept: "application/JSON"
    }
  }
  )
  await expect(response.status()).toBe(400);
  const body = await response.json();
  const expectedBody = {
    "error": "Please check your request parameters"
  }
  await expect(body).toEqual(expectedBody);
}
)

test("GET /api/charts?orderBy=Name&order=desc 400", async ({ request }) => {
  const response = await request.get("/api/charts?order=Name&order=desc", {
    headers: {
      Accept: "application/JSON"
    }
  }
  )
  await expect(response.status()).toBe(400);
  const body = await response.json();
  const expectedBody = {
    "error": "Please check your request parameters"
  }
  await expect(body).toEqual(expectedBody);
}
)

test("GET /api/chaarts 404", async ({ request }) => {
  const response = await request.get("/api/chaarts", {
    headers: {
      Accept: "application/JSON"
    }
  }
  )
  await expect(response.status()).toBe(404);
}
)