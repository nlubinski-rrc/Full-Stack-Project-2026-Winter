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