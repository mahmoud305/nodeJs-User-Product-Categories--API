# nodeJs-User-Product-Categories--API using mysql --> sequelize
## how to run : download the code open it with your editor (ex: VScode) open terminal then run (npm install) to download the modules file , - *change the database Configiration at the dbconfig.js file to your setup* -.

### the DataBase contain three tables which are :
#### -Users(id ,userName , email , password , phone ).
#### -Category  (id ,title , description).
#### -Product (name , title , description ,price , FK{ createdBy = userID}, FK {category = categoryID} , time).
#### </br>The Api Provides Endpoints for : 
1. **create user**	
2. **edit user**
3. **delete user by ID**
4. **create category**
5. **edit category**
6. **delete category by id**
7. **create  product**
8. **delete product by id**
9. **edit product**
10. **get product  by category**
11. __get all user products by category id__ <\br>
##### for any comment , feedback or question you can *contact with me at*  __ma5027300@gmail.com__
