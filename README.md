
# MMC-Backend 

**Prerequisites**

Download the following tools

-  [Node js](https://nodejs.org/en/)
-  [PostgreSQL](https://postgresql.org/download/)
- Postman

**Main Setup**

1. &nbsp; _Setup the **postgreSQL**_ -
   -
   - Click on install and keep going next until , the password setup page comes
     
    _Remember the password as it will be used later_
   
    ![set_password](https://github.com/Shanvithegreat0/mmc_backend_setup/assets/103589784/45b163c3-9f22-4a22-b48b-356a7e24c599)

   - Keep everything default and install the PostgreSQL

&nbsp;
&nbsp;
2. &nbsp; _Running postgreSQL_ -
  -
  -  Search for **pgadmin** in Windows
  
  - It will ask for password , enter it
  
  - Now right click on **Database** , And click on create , then Database .

     _As shown in the figure_
    
    ![pgAdmin 4 15-08-2023 06_58_22](https://github.com/Shanvithegreat0/mmc_backend_setup/assets/103589784/e596a95b-e71b-4fd3-a008-bd99634e1925)

- Give a name to your database , For eg ~ newdb , mydb , etc.

- Leave rest to default and save your Database

- Now go to Schemas -> Table -> User -> Query tool

- Copy Paste the below query in Query Editor

     CREATE TABLE public.users
  (
 
  &nbsp;&nbsp; fullname character varying(100) NOT NULL,
  
  &nbsp;&nbsp;username character varying(50) UNIQUE NOT NULL
  
  );

- Run the Query

3. &nbsp; _Server startup_ -
   -
   - Go to [This repo](https://github.com/rohit-rambade/mmc-backend) and Clone it on your local device

   - Open the cloned repo folder on VSC or any other code editor

   - Open the new Terminal and run the command _npm i_

   - Go to index.js and Replace _**firstname**_ from line 34, 37 and 41 to _**fullname**_

   - Also replace _**lastname**_ from lines 34 ,37 , 41 to _**username**_

   - Go to db.js and change password and database name , to your personalized one.

   - Run index.js file using nodejs

  4. &nbsp; _Using Postman_ -

     - After installation, the Postman landing screen opens. Now create your Postman account here

     - After the account setup the following screen opens-

          ![start_screen](https://github.com/Shanvithegreat0/mmc_backend_setup/assets/103589784/40e753f3-dc72-4f88-848d-a3c4c4850ee3)
    
     - Now go to collection and Create a new colletion with name  **testing**

     - Now right click on Collection name Select _**Add request**_

     - Create a new request

     - Paste the URL http://localhost:5000/api/test in the _Enter URL_ section

     - Now Change the method type from **GET** to **POST**
    
       _As shown below-_
       
         ![image](https://github.com/Shanvithegreat0/mmc_backend_setup/assets/103589784/dee0131b-016f-4f39-969c-70761950e634)
       
     - Select Body -> Raw as shown in Above image

     - Change file type from **Text** to **JSON** as shown

     - Copy paste the below code in text area

         {
       
         "fullname":"test",
       
          "username":"test2"
     
          }
     - Now run index.js file from VSC as told in previous step

     - Send the request from Postman By clicking on **SEND**

     - Check postgreSQL window , A table in Data ouput would have been created 

     

    



   
   




  
    
   



