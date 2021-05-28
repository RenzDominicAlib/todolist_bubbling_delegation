
		const clickBtn = document.querySelector('button');
		let ul = document.querySelector('ul');
		// console.log(clickBtn);

		// clickBtn.onclick = function(){
		// };

//Add//////////////////

		// using addEventListener: search for more about this!!!
		clickBtn.addEventListener('click', function(e){
			let newli = document.createElement('li');
			newli.textContent = 'Something New Todo';

			// ul.append(newli);
			ul.prepend(newli);
		});
		
//Delete///////////////

		const list = document.querySelector('ul');
		// console.log(list);

		list.addEventListener('click' , function(e){
			// console.log('you clicked the list');
			// console.log(e);
			if (e.target.tagName === 'LI') {
				list.removeChild(e.target);
			};
			
		});


		
