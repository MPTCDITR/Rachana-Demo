# rachana-wordpress-demo

A demo for apply CGDS on Wordpress theme.

## Installation


1. This is where your installation instructions go.
Clone the Repository

To clone this project to your local machine, run the following command in your terminal:

```bash
git clone git@github.com:MPTCDITR/rachana-wordpress-demo.git
```

2. With Docker installed and running, in Terminal:

````
cd rachana-wordpress-demo
````

3. Then: (add sudo if linux)

````
docker compose up -d
````

4. After that, in your browser:
   
````
http://localhost:10033/
````

5. While running docker, you have to run the Script: 

````
./rachana_block.sh
````

also a common problem faced by linux is the permission issue, to fix it run the following command:

Unlock permision directory
```` 
chmod -R 777 . 
````

Clear Database

````
docker compose down -v
````

## WordPress Admin Login

Go to `http://localhost:10033/wp-admin/`

Then, log in with: `Username: admin` and `Password: password`


## Contribute


Contributions have also been made by:

[@Visethboti](https://github.com/Visethboti) 


[@PhalKimheng](https://github.com/PhalKimheng)
