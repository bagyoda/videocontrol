# videocontrol

`Spring .\src\main\java\com\vending\videocontrol\`
`React .\videocontrol\src\main\webapp\reactjs`

##Environmental variables:
**Database connection**

| Var_Name | Value |
| --------- | ----- |
|DATASOURCE_URL | jdbc:mysql://localhost:3306/{your database name}?serverTimezone=UTC |
|DATASOURCE_USERNAME | *your local mysql username* |
|DATASOURCE_PASSWORD | *your local mysql password* |
|HIBERNATE_DIALECT | org.hibernate.dialect.MySQL5Dialect |

##Start Spring
`.\src\main\java\com\vending\videocontrol\VideoControlApplication.java`

##StrartReact
`.\videocontrol\src\main\webapp\reactjs`
`npm start`

##APIs
**GET** http://localhost:8080/videos
   e.g. response 
   ```json
   {
        "status": "ok",
            "videos": [
                {
                    "id": 1,
                    "name": "test",
                    "length": "23:22",
                    "description": "something"
                }
            ]
    }
```    

**POST** http://localhost:8080/video/save
   e.g. request
```json
      {
        "name" : "test",
        "length" : "23:22",
        "description" : "something"
      }
```
/200   e.g. response
```json    
         {
            "id": 2,
            "name": "test1",
            "length": "23:22",
            "description": "something"
          }
```
    
**PUT** http://localhost:8080/video/set

e.g. request:
```json
    {
        "name" : "test"
    }
```    
   /200 e.g. response
```json 
        {
         blank
        }
```   

**PUT** http://localhost:8080/video/unset
e.g. request:
```json    
        {
            "name" : "test"
        }
```    
   /200 e.g. response 
```json   
        {
         blank
        }
```   

**DELETE** http://localhost:8080/video/delete
    e.g. request:
```json    
        {
          "name" : "test"
        }
``` 
/200 e.g. response  
```json    
         {
          blank
         }
```                 