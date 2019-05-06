
const link = document.querySelector('a');
link.textContent = 'Best website in the World!';
link.href = 'https://programmingmentor.com';


const sect = document.querySelector('section');

const para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride.';
sect.appendChild(para);

const text = document.createTextNode(' — the premier source for web development knowledge.');
const linkPara = document.querySelector('p');
linkPara.appendChild(text);
//sect.appendChild(text);
const clonedText = text.cloneNode(true);
sect.appendChild(clonedText);


setTimeout( () => sect.removeChild(clonedText), 2000 );
para.classList.add('selected');

// para.style.color = 'white';
// para.style.backgroundColor = 'black';
// para.style.padding = '10px';
// para.style.width = '250px';
// para.style.textAlign = 'center';


// Clock
const clockContainer = document.querySelector('.clock');
setInterval( () => clockContainer.innerText = (new Date()).toLocaleTimeString(), 1000);

const products = [
    {
        title: 'Tesla X',
        price: 120000
    },    
    {
        title: 'Honda Accord',
        price: 40000
    },
    {
        title: 'Lexus NX200t',
        price: 36000
    },
    {
    
    title: 'Toyota Prius',
    price: 10000
    }
];

products.sort((a,b) => b.price - a.price)
products.sort( (a, b) => a.title < b.title 
                            ? -1
                            : a.title > b.title); 

const priceList = document.querySelector('.price-list');
for (const product of products) {
    const productPara = document.createElement('p');
    productPara.textContent = `Title: ${product.title}, Price: ${product.price}`;
    priceList.appendChild(productPara);
}


const clockToggleButton = document.querySelector('.clockToggle');
clockToggleButton.addEventListener('click', clockToggle);

function clockToggle(e) {
    e.preventDefault();
    clockContainer.hidden = !clockContainer.hidden;  
    clockToggleButton.innerText = clockContainer.hidden ? 'Show Clock' : 'Hide Clock';
}

// jQuery Sample
$('.toggle-pars').click( () => $('p').toggle(3000) );


