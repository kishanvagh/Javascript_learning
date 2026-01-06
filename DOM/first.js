//  ----------------------------------------diffrence betwen HTML COLLECTION and NodeList -------------------------
// https://www.freecodecamp.org/news/dom-manipulation-htmlcollection-vs-nodelist/?utm_source=chatgpt.com


const h1=document.getElementById('title');
h1.style.color='blue';
h1.style.backgroundColor='lightgray';
h1.style.padding='10px';
h1.style.textAlign='center';


const classList=document.getElementsByClassName('todo');
console.log(classList);     //html collection

//covnert html collection to array
const classArray=Array.from(classList);
classArray.forEach(function(item){
    item.style.fontSize='20px';
    item.style.marginBottom='5px';
    item.style.color='green';
});

const liItems=document.querySelectorAll('li');
console.log(liItems);     //node list


liItems.forEach(function(item){
    item.style.listStyleType='circle';
    item.style.marginLeft='20px';
});

const firstTodoItem=document.querySelector('.todo');   //query selector gives the first element
console.log(firstTodoItem.innerHTML);
console.log(firstTodoItem.textContent);
console.log(firstTodoItem.innerText);


//what is the difference between innerHTML, textContent, and innerText?
//innerHTML: returns the HTML content of an element as a string, including any nested HTML tags.
//textContent: returns the text content of an element and all its descendants, without any HTML tags. It includes hidden elements.
//innerText: returns the visible text content of an element, taking into account CSS styles like "display: none". It excludes hidden elements.

//what is the difference between HTMLCollection and NodeList?
//HTMLCollection: is a live collection of elements that updates automatically when the DOM changes. It is typically returned by methods like getElementsByClassName and getElementsByTagName.
//NodeList: can be live or static, depending on how it is obtained. It is typically returned by methods like querySelectorAll (static) and childNodes (live). A NodeList can contain any type of node, not just element nodes.

firstTodoItem.innerHTML='<strong>Learn JavaScript DOM Manipulation</strong>';
const btn = document.querySelector('#add-btn');

btn.addEventListener('click', function () {
  const inputeText = document.querySelector('input[type="text"]');

  if (inputeText.value.trim() !== '') {
    const ul = document.querySelector('ul');

    const li = document.createElement('li'); 
    li.innerText = inputeText.value.trim();  

    ul.appendChild(li);  
    li.style.fontSize='20px';
    li.style.marginBottom='5px';
    li.style.color='green';               
    inputeText.value = '';
    li.classList.add('todo')
    const totalList=document.getElementsByClassName('todo')
    const counter=document.getElementById("count").innerText=totalList.length
  }
});

const liList=document.querySelectorAll('li')
console.log(liList)
liList.forEach((li)=>{
   li.addEventListener('click', function () {
  const ul = this.parentElement; // 👈 traversal
  
  ul.style.backgroundColor = 'lightblue';

  setTimeout(() => {
    ul.style.backgroundColor = '';
  }, 300);
});

})

