window.onload = SingerTable;

const ado = {"name": "Ado", "Hometown": "Tokyo, Japan","BestSong": "Gira Gira"};
const lilas_ikuta = {"name": "Lilas Ikuta", "Hometown": "Tokyo, Japan", "BestSong": "Idol"};
const tomohiko_kikuta = {"name": "Tomohiko Kikuta","Hometown": "Tokyo, Japan", "BestSong": "Ordinary Sunday"};
const yui = {"name": "Yui", "Hometown": "Fukuoka, Japan", "BestSong": "Again"};

//Declaring my dictionaries with the names, hometowns, and best songs of the singers.

const listOfSingers = {ado,lilas_ikuta,tomohiko_kikuta,yui}

//Creating a list of dictionaries

function SingerTable(){

    for (let singer of Object.values(listOfSingers)){

        const tableBody = document.getElementById('tableBody');

        //Creating a table body

        let tr = document.createElement('tr');

        let nametd = document.createElement('td');
        nametd.innerText = singer.name;

        let hometowntd = document.createElement('td');
        hometowntd.innerText = singer.Hometown;


        let bestSongtd = document.createElement('td');
        bestSongtd.innerText = singer.BestSong;

        //Looping through the dictionary's values and creating element IDs for them


        tr.appendChild(nametd);
        tr.appendChild(hometowntd);
        tr.appendChild(bestSongtd);

        //Appending the names, hometowns, and best songs to the table row

        tableBody.appendChild(tr);

        //Appending the created elements to the table body
        
    }


}
