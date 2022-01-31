console.log('cards');
const mobile = document.querySelector('.pos-text .mobile-only');
const laptop = document.querySelector('.pos-text .laptop-only');
const p = document.querySelector('.pos-text p');

let count = 1;

const messages = [
	{
    title: "The Simplest Way to Grow Online",
    body: "For just a one-time $25 fee, we’ll handle the technical details of setting up your site. Then, the only other costs associated with selling online is the 4.95% transaction fee, making Chamber Market an affordable solution for growing local businesses."
  },
	{
    title: "Save Time and Expenses",
    body: "For just a one-time $25 fee, we’ll handle the technical details of setting up your site. Then, the only other costs associated with selling online is the 4.95% transaction fee, making Chamber Market an affordable solution for growing local businesses."
  },
	{
    title: "Enjoy Free Business Supports",
    body: "You’ll get more than just web support—join your local Chamber of Commerce to access business and marketing support."
  },
	{
    title: "Discover Passionate Staff",
    body: "There’s also the opportunity to share job openings on Chamber Market, supporting your business growth by connecting you with Albertans who share your passion for local business. "
  }
]

function onLoad() {
	mobile.textContent = messages[count].title
	laptop.textContent = messages[count].title
	p.textContent = messages[count].body
}

function counter(direction){
	console.log('count', count)
	if(count > 3) {
		count = 0;
		onLoad();
	}

	if(count < 0) {
		count = 3;
		onLoad();
	}

	if(direction === "left"){
		onLoad();
		count--
		console.log('left');
	}
	if(direction === "right"){
		onLoad();
		count++
		console.log('right');
	}
}

// function fade() {
// 	div.classList.toggle('show')
// 	div.classList.add("animate__animated");
// 	div.classList.add("animate__fadeInRight");
// };
