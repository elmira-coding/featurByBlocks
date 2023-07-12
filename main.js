var item, number, userbasket, counter, name2, product, price, priceholder;

// Describe this function...
function creat_menue() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  name2.forEach((item) => {
    let element_list3 = document.getElementById('list');
    let new_li2 = document.createElement('li');
    let new_a2 = document.createElement('a');
    new_a2.setAttribute("href", number.shift());
    new_a2.innerText = item;

    new_li2.appendChild(new_a2);

    element_list3.appendChild(new_li2);
  });
}

function convertToNumber(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return 0
  } else {
    return number_value
  }
}


number = [1, 1, 1, 1];
name2 = ['AboutUs', 'contactMe', 'CheckVideo', 'Home'];

counter = 0;


document.getElementById('button').addEventListener('click', (event) => {
  if (counter == 0) {
    name2.forEach((name2) => {
      let element_list = document.getElementById('list');
      let new_li = document.createElement('li');
      let new_a = document.createElement('a');
      new_a.innerText = name2;
      new_a.setAttribute("href", number[0]);

      new_li.appendChild(new_a);

      element_list.appendChild(new_li);
    });
    counter = (typeof counter === 'number' ? counter : 0) + 1;
  } else if (counter == 1) {
    let element_list2 = document.getElementById('list');
    element_list2.replaceChildren();
    counter = 0;
  }

});

document.getElementById('comment').addEventListener('click', (event) => {
  event.target.innerText = document.getElementById('comment').value;

});

document.getElementById('send').addEventListener('click', (event) => {
  let element_com = document.getElementById('com');
  element_com.innerText = document.getElementById('comment').value;

});
userbasket = [];
product = ['book', 'pen', 'notebook', 'stick', 'pencil'];
price = [25, 10, 12, 5, 8];
priceholder = [];


document.getElementById('butt').addEventListener('click', (event) => {
  product.forEach((item) => {
    if (document.getElementById('user').value == item) {
      let element_listb = document.getElementById('listb');
      let new_li3 = document.createElement('li');
      new_li3.innerText = document.getElementById('user').value;

      element_listb.appendChild(new_li3);
      userbasket.unshift(document.getElementById('user').value);
    }
  });
  if (document.getElementById('user').value == 'book') {
    priceholder.unshift(25);
  } else if (document.getElementById('user').value == 'pen') {
    priceholder.unshift(10);
  } else if (document.getElementById('user').value == 'notebook') {
    priceholder.unshift(12);
  } else if (document.getElementById('user').value == 'stick') {
    priceholder.unshift(5);
  } else if (document.getElementById('user').value == 'pencil') {
    priceholder.unshift(8);
  }
  let element_total_price = document.getElementById('total_price');
  element_total_price.innerText = priceholder.reduce((a,b) => a+b, 0);

});
0 == '4';