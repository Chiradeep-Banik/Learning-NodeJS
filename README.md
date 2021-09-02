# Learning-NodeJS
Started learning nodejs from Youtube and Udemy(Andrew Mead)

# My logs :
- Project 1 --- Note taking app
- Project 2 --- Wheather app
- Project 3 --- ToDo app

## Project 1
- Created a note taking app using nodejs
    - Used fs to read to and write into a text file 
    - I used the text file as a database that stores the notes as strings
    - Used yargs module to parse the command line arguments
        - Used the command line arguments to add, remove, list and read the notes
        - Made the app using yargs.command() method 
    - Used the chalk module to color the output 

## Project 2
- Created a weather app using nodejs
    - Used the request module to fetch the weather data from the API
    - Took data from the user and used a GEOCODE api to get the latitude and longitude
    - Used another api to get the weather data from the latitude and longitude
    - Used callback pipelining to feed the data from one api to another