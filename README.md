# Stock Trades API

This is a simple REST API to manage a collection of stock trades. The API allows creating, retrieving, updating, and deleting trade records stored in a JSON file.

## Installation

1. Clone the repository or download the source code.
2. Navigate to the project directory.
3. Install the dependencies by running:
   ```sh
   npm install
   ```

## Usage


1. Start the server:
   ```sh
   node index.js
   ```

2. The server will run on port 8080 by default.

## API Endpoints

### Create a Trade

- **URL:** `/trades`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
     "id":1,
    "type": "buy",
    "user_id": 23,
    "symbol": "ABX",
    "shares": 30,
    "price": 134
  }
  ```
- **Response:**
  - **Status Code:** `201 Created`
  - **Body:**
    ```json
    {
      "id": 1,
      "type": "buy",
      "user_id": 23,
      "symbol": "ABX",
      "shares": 30,
      "price": 134
    }
    ```

### Get All Trades

- **URL:** `/trades`
- **Method:** `GET`
- **Response:**
  - **Status Code:** `200 OK`
  - **Body:**
    ```json
    {
      "trades": [
        {
          "id": 1,
          "type": "buy",
          "user_id": 23,
          "symbol": "ABX",
          "shares": 30,
          "price": 134
        }
      ]
    }
    ```

### Get a Trade by ID

- **URL:** `/trades/:id`
- **Method:** `GET`
- **Response:**
  - **Status Code:** `200 OK`
  - **Body:**
    ```json
    {
      "id": 1,
      "type": "buy",
      "user_id": 23,
      "symbol": "ABX",
      "shares": 30,
      "price": 134
    }
    ```
  - **Status Code:** `404 Not Found` (if trade with given ID does not exist)
  - **Body:** `ID not found`

### Delete a Trade by ID

- **URL:** `/trades/:id`
- **Method:** `DELETE`
- **Response:**
  - **Status Code:** `200 OK`
  - **Status Code:** `404 Not Found` (if trade with given ID does not exist)
  - **Body:** `ID not found`

### Update the Price of a Trade by ID

- **URL:** `/trades/:id`
- **Method:** `PATCH`
- **Request Body:**
  ```json
  {
    "price": 140
  }
  ```
- **Response:**
  - **Status Code:** `200 OK`
  - **Body:**
    ```json
    {
      "id": 1,
      "type": "buy",
      "user_id": 23,
      "symbol": "ABX",
      "shares": 30,
      "price": 140
    }
    ```
  - **Status Code:** `404 Not Found` (if trade with given ID does not exist)
  - **Body:** `ID not found`
  - **Status Code:** `400 Bad Request` (if request body is invalid)
  - **Body:** `Invalid request`

## Logging

The application uses `morgan` middleware to log the following information for each incoming request:
- HTTP method
- Request URL
- Response status code
- Response time
- Date and time of the request

Here's the complete `README.md` file in one block for easy copying, formatted to maintain the structure:

```markdown
# Stock Trades API

This is a simple REST API to manage a collection of stock trades. The API allows creating, retrieving, updating, and deleting trade records stored in a JSON file.

## Prerequisites

- Node.js installed on your machine
- npm (Node Package Manager)

## Installation

1. Clone the repository or download the source code.
2. Navigate to the project directory.
3. Install the dependencies by running:
   ```sh
   npm install
   ```

## Usage

1. Create an empty JSON file named `trades.json`:
   ```sh
   echo "[]" > trades.json
   ```

2. Start the server:
   ```sh
   node index.js
   ```

3. The server will run on port 3000 by default.

## API Endpoints

### Create a Trade

- **URL:** `/trades`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "type": "buy",
    "user_id": 23,
    "symbol": "ABX",
    "shares": 30,
    "price": 134
  }
  ```
- **Response:**
  - **Status Code:** `201 Created`
  - **Body:**
    ```json
    {
      "id": 1,
      "type": "buy",
      "user_id": 23,
      "symbol": "ABX",
      "shares": 30,
      "price": 134
    }
    ```

### Get All Trades

- **URL:** `/trades`
- **Method:** `GET`
- **Response:**
  - **Status Code:** `200 OK`
  - **Body:**
    ```json
    {
      "trades": [
        {
          "id": 1,
          "type": "buy",
          "user_id": 23,
          "symbol": "ABX",
          "shares": 30,
          "price": 134
        }
      ]
    }
    ```

### Get a Trade by ID

- **URL:** `/trades/:id`
- **Method:** `GET`
- **Response:**
  - **Status Code:** `200 OK`
  - **Body:**
    ```json
    {
      "id": 1,
      "type": "buy",
      "user_id": 23,
      "symbol": "ABX",
      "shares": 30,
      "price": 134
    }
    ```
  - **Status Code:** `404 Not Found` (if trade with given ID does not exist)
  - **Body:** `ID not found`

### Delete a Trade by ID

- **URL:** `/trades/:id`
- **Method:** `DELETE`
- **Response:**
  - **Status Code:** `200 OK`
  - **Status Code:** `404 Not Found` (if trade with given ID does not exist)
  - **Body:** `ID not found`

### Update the Price of a Trade by ID

- **URL:** `/trades/:id`
- **Method:** `PATCH`
- **Request Body:**
  ```json
  {
    "price": 140
  }
  ```
- **Response:**
  - **Status Code:** `200 OK`
  - **Body:**
    ```json
    {
      "id": 1,
      "type": "buy",
      "user_id": 23,
      "symbol": "ABX",
      "shares": 30,
      "price": 140
    }
    ```
  - **Status Code:** `404 Not Found` (if trade with given ID does not exist)
  - **Body:** `ID not found`
  - **Status Code:** `400 Bad Request` (if request body is invalid)
  - **Body:** `Invalid request`

## Logging

The application uses `morgan` middleware to log the following information for each incoming request:
- HTTP method
- Request URL
- Response status code
- Response time
- Date and time of the request

![image](https://github.com/aakashindoriya/machine/assets/37771235/141fb18c-1701-41c4-826e-e6177866baf1)


