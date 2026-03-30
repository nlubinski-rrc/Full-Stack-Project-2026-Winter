# Endpoint Data Contract
## Reviews
### **POST /**
    - Creates a review

Url Parameters:
| Parameter        | Type   | Description      |
|------------------|--------|----------------- |
| Id               | number | ID of the review |

### Req body:
```json
{
  "movieName": "string",
  "review": "string",
  "reviewOutOfTen": "number"
}
```
---

### **PUT /**
    - Updates a review

Url Parameters:
| Parameter        | Type   | Description      |
|------------------|--------|----------------- |
| Id               | number | ID of the review |

### Req body:
```json
{
  "review": "string",
  "reviewOutOfTen": "number"
}
```

---
### **GET /**
    - Gets all review

---

### **GET /**
    - Get a review

Url Parameters:
| Parameter        | Type   | Description      |
|------------------|--------|----------------- |
| Id               | number | ID of the review |

---

### **DELETE /**
    - Deletes a review

Url Parameters:
| Parameter        | Type   | Description      |
|------------------|--------|----------------- |
| Id               | number | ID of the review |

---

## Actors

### **GET /**

- Gets all actors

### **GET /:id**

- Gets an actor by id
URL Parameters:

| Parameter | Type   | Description     |
|-----------|--------|-----------------|
| id        | number | ID of the actor |

### **PUT /:id**

- Updates an actors data
URL Parameters:

| Parameter | Type   | Description     |
|-----------|--------|-----------------|
| id        | number | ID of the actor |

Request Body

```json
{
    "isFavourite": "boolean"
}
```

---

## Movies

### **GET /titles/:title**
    - Gets a movie by title

Url Parameters:
| Parameter        | Type   | Description      |
|------------------|--------|----------------- |
| title            | string | Title of the movie |


### **GET /:id**
    - Gets a movie by title

Url Parameters:
| Parameter        | Type   | Description      |
|------------------|--------|----------------- |
| id               | number | Id of the movie  |

### **GET /**
    - Gets all movies