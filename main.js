// what is the path to the JSON file?
const apiURL = "./hoteldata.json";

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((myList) => {
    //Once it comes back, display it to the console.
    console.log(myList);
    
// FIRST LOCATION
    let myImg = document.createElement('img')
    myImg.src = myList[0].photo;

    let myFigCap = document.createElement('figcaption')
    myFigCap.textContent = myList[0].name;

    let myFigure = document.createElement('figure')
    myFigure.className = "pic1";
    myFigure.appendChild(myImg);
    myFigure.appendChild(myFigCap);

    let mySpan = document.createElement('span');
    mySpan.className = "fa fa-map-marker-alt";

    let myIconDiv = document.createElement('div');
    myIconDiv.className = "icon1";
    myIconDiv.appendChild(mySpan)

    let addressPTag1 = document.createElement('p');
    addressPTag1.textContent = myList[0].address[0];
    let addressPTag2 = document.createElement('p');
    addressPTag2.textContent = myList[0].address[1];

    let myAddressDiv = document.createElement('div');
    myAddressDiv.className = "address";
    myAddressDiv.appendChild(addressPTag1);
    myAddressDiv.appendChild(addressPTag2);

    let mySpanPhone = document.createElement('span');
    mySpanPhone.className = 'fa fa-phone';

    let myIconDivPhone = document.createElement('div');
    myIconDivPhone.className = "icon2";
    myIconDivPhone.appendChild(mySpanPhone);

    let myPhoneP1 = document.createElement('p');
    myPhoneP1.textContent = myList[0].phone;

    let myPhoneDiv1 = document.createElement('div');
    myPhoneDiv1.className = "phone";
    myPhoneDiv1.appendChild(myPhoneP1)

    let loc1 = document.querySelector('.loc1')
    loc1.appendChild(myFigure);
    loc1.appendChild(myIconDiv)
    loc1.appendChild(myAddressDiv);
    loc1.appendChild(myIconDivPhone);
    loc1.appendChild(myPhoneDiv1);






    let myImg2 = document.createElement('img')
    myImg2.src = myList[1].photo;

    let myFigCap2 = document.createElement('figcaption')
    myFigCap2.textContent = myList[1].name;

    let myFigure2 = document.createElement('figure')
    myFigure2.className = "pic1";
    myFigure2.appendChild(myImg2);
    myFigure2.appendChild(myFigCap2);

    let mySpan2 = document.createElement('span');
    mySpan2.className = "fa fa-map-marker-alt";

    let myIconDiv2 = document.createElement('div');
    myIconDiv2.className = "icon1";
    myIconDiv2.appendChild(mySpan2)

    let addressPTag12 = document.createElement('p');
    addressPTag12.textContent = myList[1].address[0];
    let addressPTag22 = document.createElement('p');
    addressPTag22.textContent = myList[1].address[1];

    let myAddressDiv2 = document.createElement('div');
    myAddressDiv2.className = "address";
    myAddressDiv2.appendChild(addressPTag12);
    myAddressDiv2.appendChild(addressPTag22);

    let mySpanPhone2 = document.createElement('span');
    mySpanPhone2.className = 'fa fa-phone';

    let myIconDivPhone2 = document.createElement('div');
    myIconDivPhone2.className = "icon2";
    myIconDivPhone2.appendChild(mySpanPhone2);

    let myPhoneP12 = document.createElement('p');
    myPhoneP12.textContent = myList[1].phone;

    let myPhoneDiv12 = document.createElement('div');
    myPhoneDiv12.className = "phone";
    myPhoneDiv12.appendChild(myPhoneP12)

    let loc2 = document.querySelector('.loc2')
    loc2.appendChild(myFigure2);
    loc2.appendChild(myIconDiv2)
    loc2.appendChild(myAddressDiv2);
    loc2.appendChild(myIconDivPhone2);
    loc2.appendChild(myPhoneDiv12);





    let myImg3 = document.createElement('img')
    myImg3.src = myList[2].photo;

    let myFigCap3 = document.createElement('figcaption')
    myFigCap3.textContent = myList[2].name;

    let myFigure3 = document.createElement('figure')
    myFigure3.className = "pic1";
    myFigure3.appendChild(myImg3);
    myFigure3.appendChild(myFigCap3);

    let mySpan3 = document.createElement('span');
    mySpan3.className = "fa fa-map-marker-alt";

    let myIconDiv3 = document.createElement('div');
    myIconDiv3.className = "icon1";
    myIconDiv3.appendChild(mySpan3)

    let addressPTag13 = document.createElement('p');
    addressPTag13.textContent = myList[2].address[0];
    let addressPTag23 = document.createElement('p');
    addressPTag23.textContent = myList[2].address[1];

    let myAddressDiv3 = document.createElement('div');
    myAddressDiv3.className = "address";
    myAddressDiv3.appendChild(addressPTag13);
    myAddressDiv3.appendChild(addressPTag23);

    let mySpanPhone3 = document.createElement('span');
    mySpanPhone3.className = 'fa fa-phone';

    let myIconDivPhone3 = document.createElement('div');
    myIconDivPhone3.className = "icon2";
    myIconDivPhone3.appendChild(mySpanPhone3);

    let myPhoneP13 = document.createElement('p');
    myPhoneP13.textContent = myList[2].phone;

    let myPhoneDiv13 = document.createElement('div');
    myPhoneDiv13.className = "phone";
    myPhoneDiv13.appendChild(myPhoneP13)

    let loc3 = document.querySelector('.loc3')
    loc3.appendChild(myFigure3);
    loc3.appendChild(myIconDiv3)
    loc3.appendChild(myAddressDiv3);
    loc3.appendChild(myIconDivPhone3);
    loc3.appendChild(myPhoneDiv13);




    let myImg4 = document.createElement('img')
    myImg4.src = myList[3].photo;

    let myFigCap4 = document.createElement('figcaption')
    myFigCap4.textContent = myList[3].name;

    let myFigure4 = document.createElement('figure')
    myFigure4.className = "pic1";
    myFigure4.appendChild(myImg4);
    myFigure4.appendChild(myFigCap4);

    let mySpan4 = document.createElement('span');
    mySpan4.className = "fa fa-map-marker-alt";

    let myIconDiv4 = document.createElement('div');
    myIconDiv4.className = "icon1";
    myIconDiv4.appendChild(mySpan4)

    let addressPTag14 = document.createElement('p');
    addressPTag14.textContent = myList[3].address[0];
    let addressPTag24 = document.createElement('p');
    addressPTag24.textContent = myList[3].address[1];

    let myAddressDiv4 = document.createElement('div');
    myAddressDiv4.className = "address";
    myAddressDiv4.appendChild(addressPTag14);
    myAddressDiv4.appendChild(addressPTag24);

    let mySpanPhone4 = document.createElement('span');
    mySpanPhone4.className = 'fa fa-phone';

    let myIconDivPhone4 = document.createElement('div');
    myIconDivPhone4.className = "icon2";
    myIconDivPhone4.appendChild(mySpanPhone4);

    let myPhoneP14 = document.createElement('p');
    myPhoneP14.textContent = myList[3].phone;

    let myPhoneDiv14 = document.createElement('div');
    myPhoneDiv14.className = "phone";
    myPhoneDiv14.appendChild(myPhoneP14)

    let loc4 = document.querySelector('.loc4')
    loc4.appendChild(myFigure4);
    loc4.appendChild(myIconDiv4)
    loc4.appendChild(myAddressDiv4);
    loc4.appendChild(myIconDivPhone4);
    loc4.appendChild(myPhoneDiv14);



    
}); //end of "then" fat arrow function