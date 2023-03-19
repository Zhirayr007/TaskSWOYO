// Функция-конструктор
function Control(data) {
	this.data=data;
	// тег контейнер
	const wrapper = document.querySelector('.wrapper');
	//SVG для кнопок
	const arrow = `<svg data-name="Livello 1" id="Livello_1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><title/><path d="M64,0a64,64,0,1,0,64,64A64.07,64.07,0,0,0,64,0Zm0,122a58,58,0,1,1,58-58A58.07,58.07,0,0,1,64,122Z"/><path d="M58.12,35.88a3,3,0,0,0-4.24,4.24L77.76,64,53.88,87.88a3,3,0,1,0,4.24,4.24l26-26a3,3,0,0,0,0-4.24Z"/></svg>`
	const arrowTwo = `<svg  viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_2)">
<path d="M64 0C51.342 0 38.9683 3.75353 28.4435 10.7859C17.9188 17.8184 9.71575 27.8138 4.87174 39.5083C0.02773 51.2027 -1.23968 64.071 1.22977 76.4858C3.69922 88.9006 9.79463 100.304 18.7452 109.255C27.6958 118.205 39.0995 124.301 51.5143 126.77C63.929 129.24 76.7973 127.972 88.4918 123.128C100.186 118.284 110.182 110.081 117.214 99.5565C124.246 89.0317 128 76.658 128 64C127.982 47.0318 121.233 30.7639 109.234 18.7656C97.2361 6.76732 80.9682 0.0185286 64 0ZM64 122C52.5287 122 41.315 118.598 31.777 112.225C22.2389 105.852 14.8049 96.7938 10.415 86.1956C6.02513 75.5975 4.87654 63.9357 7.11448 52.6848C9.35243 41.4339 14.8764 31.0993 22.9878 22.9878C31.0993 14.8764 41.4339 9.3524 52.6848 7.11445C63.9357 4.87651 75.5976 6.0251 86.1957 10.415C96.7938 14.8049 105.852 22.2389 112.225 31.7769C118.598 41.315 122 52.5287 122 64C121.982 79.3769 115.865 94.1186 104.992 104.992C94.1187 115.865 79.3769 121.981 64 122Z" fill="black"/>
<path d="M41.1948 35.88C40.6261 35.3501 39.874 35.0616 39.0967 35.0753C38.3195 35.089 37.578 35.4039 37.0283 35.9535C36.4787 36.5032 36.1638 37.2447 36.1501 38.0219C36.1364 38.7991 36.4249 39.5513 36.9548 40.12L60.8348 64L36.9548 87.88C36.6601 88.1546 36.4237 88.4858 36.2597 88.8538C36.0957 89.2218 36.0076 89.6191 36.0005 90.0219C35.9934 90.4247 36.0675 90.8248 36.2183 91.1984C36.3692 91.5719 36.5938 91.9113 36.8787 92.1962C37.1636 92.481 37.5029 92.7056 37.8764 92.8565C38.25 93.0074 38.6501 93.0815 39.0529 93.0744C39.4557 93.0673 39.853 92.9791 40.221 92.8151C40.589 92.6512 40.9202 92.4147 41.1948 92.12L67.1948 66.12C67.7566 65.5575 68.0722 64.795 68.0722 64C68.0722 63.205 67.7566 62.4425 67.1948 61.88L41.1948 35.88Z" fill="black"/>
<path d="M65.2697 35.8052C64.701 35.2753 63.9488 34.9868 63.1716 35.0005C62.3944 35.0142 61.6528 35.329 61.1032 35.8787C60.5535 36.4283 60.2387 37.1699 60.225 37.9471C60.2113 38.7243 60.4997 39.4765 61.0297 40.0452L84.9097 63.9252L61.0297 87.8052C60.7349 88.0798 60.4985 88.411 60.3345 88.779C60.1706 89.147 60.0824 89.5443 60.0753 89.9471C60.0682 90.3499 60.1423 90.75 60.2932 91.1236C60.4441 91.4971 60.6686 91.8364 60.9535 92.1213C61.2384 92.4062 61.5777 92.6308 61.9513 92.7817C62.3248 92.9325 62.7249 93.0066 63.1278 92.9995C63.5306 92.9924 63.9278 92.9043 64.2958 92.7403C64.6638 92.5763 64.995 92.3399 65.2697 92.0452L91.2697 66.0452C91.8315 65.4827 92.147 64.7202 92.147 63.9252C92.147 63.1302 91.8315 62.3677 91.2697 61.8052L65.2697 35.8052Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_1_2">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
	</svg>`

	let buttongroupFunc = (side) => {
		return `<div  class="buttongroup">
						<button  class="up-${side} arrow-up">
							${arrow}
						</button>
						<button class="uptwo-${side} arrow-up">
							${arrowTwo}
						</button>
						<button class="down-${side} arrow-down">
							${arrow}
						</button>
						<button class="downtwo-${side} arrow-down">
							${arrowTwo}
						</button>
					</div>`}
	const blocks = `<div class="block">
								<div class="title" >
										Available
									</div >
									<div class="content">
										<ul id="available" class="list">
										</ul>
									</div>
								</div > 
								<div  class="buttongroup">
									<button  class="right arrow-right">
										${arrow}
									</button>
									<button class="rightAll arrow-right">
										${arrowTwo}
									</button>
									<button class="left arrow-left">
										${arrow}
									</button>
									<button class="leftAll arrow-left">
										${arrowTwo}
									</button>
								</div>
								<div class="block">
									<div class="title">
										Selected
									</div>
									<div class="content">
										<ul id="selected" class="list">
										</ul>
									</div>
	</div>`
	const block_button = `<div class="block-button">
	<button class="reset"> RESET </button>
	<button class="random"> RANDOM </button>
	</div>`
	//Добавляем html в wrapper
	wrapper.innerHTML = buttongroupFunc('left') + blocks + buttongroupFunc('right') + block_button;

	// тег контейнер
	let list1 = document.querySelector('#available'); // левый контейнер
	let list2 = document.querySelector('#selected'); // правый контейнер
	let containerMass1 = []  // массив для левого контейнера
	let containerMass2 = [] // массив для правого контейнера

	function structElem(content){
		if(content.img!=null){
			return `<div class="element__img"><img  src="${content.img}" alt="${content.text}"></div><span class="element__text">${content.text}</span>`;
		}else{
			return `<span class="element__text">${content.text}</span>`;
		}
	}
	/**
	 * Функия для создания эелементов контрола 
	 * Возвращает элемент
	 * @param content, объект элемента
	 */
	function createElem(content) {
		let element = document.createElement('li');
		element.className = "element";
		element.innerHTML =structElem(content);
		element.addEventListener("click", function () {
			document.querySelectorAll(".element").forEach((item) => { item.classList.remove("activ"); });
			element.classList.add("activ");
		});
		return element;
	}
	/**
	 * Функция для сброса контрола
	 */
	function resetFunc() {
		let elements = document.querySelectorAll(".element");
		for (let elem of elements) {
			elem.remove();
		}
		containerMass1 = [];
		containerMass2 = [];
		for (let i = 0; i < 6; i++) {
			containerMass1.push(data[i]);
			let element = createElem(containerMass1[i]);
			list1.append(element);
		}
	}
	resetFunc();
	/**
	 * Для новых элементов контролов
	 */
	function randomFunc() {
		containerMass1.push({text:"TEXT " + Math.floor(Math.random() * 100)});
		let element = createElem(containerMass1[containerMass1.length - 1]);
		list1.append(element);
	}
	/**
	 * Для смещения выбранного элемента вверх на 1
	 */
	function up(containerMass) {
		let activ = document.querySelector('.activ');//получаем выбранный элемент
		if (activ != null) {
			let prev = activ.previousSibling;// получаем элемент который стоит перед выбранным элементом
			containerMass.forEach((elem, i) => { //проходимся по моссиву контейнера
				if (activ.lastElementChild.innerHTML == elem.text && i != 0) {
					//меняем значения в массиве containerMass
					//также меняем содержимое DOM элементов 
					let a = containerMass[i - 1];
					containerMass[i - 1] = containerMass[i]; 
					activ.innerHTML = prev.innerHTML;
					activ.classList.remove("activ");
					prev.innerHTML = structElem(containerMass[i]);
					containerMass[i] = a;
					prev.classList.add("activ");
				}
			});
		}
	}
	/**
	 * Для смещения выбранного элемента вниз на 1
	 */
	function down(containerMass) {
		let activ = document.querySelector('.activ');
		let next = activ.nextSibling;
		if (activ != null && next != null) {
			containerMass.forEach((elem, i) => {
				if (activ.lastElementChild.innerHTML == elem.text && i != containerMass[containerMass.length - 1]) {
					let a = containerMass[i + 1];
					containerMass[i + 1] = containerMass[i];
					activ.innerHTML = next.innerHTML;
					next.innerHTML = structElem(containerMass[i]);
					next.classList.add("activ");
					containerMass[i] = a;
					activ.classList.remove("activ");
				}
			});
		}
	}
	/**
	 * Для смещения выбранного элемента в top списка
	 */
	function up2(containerMass) {
		let activ = document.querySelector('.activ');
		if (activ != null) {
			let parent = activ.parentElement;
			containerMass.forEach((elem, i) => {
				if (activ.lastElementChild.innerHTML == elem.text && i != 0) {
					let a = containerMass[0];
					containerMass[0] = containerMass[i];
					activ.innerHTML = parent.firstElementChild.innerHTML;
					parent.firstElementChild.innerHTML = structElem(containerMass[i]);
					parent.firstElementChild.classList.add("activ");
					containerMass[i] = a;
					// activ.innerHTML = a;
					activ.classList.remove("activ");
				}
			});
		}
		// console.log(containerMass)
	}
	/**
	 * Для смещения выбранного элемента в конец списка
	 */
	function down2(containerMass) {
		let activ = document.querySelector('.activ');
		if (activ != null) {
			let parent = activ.parentElement;
			containerMass.forEach((elem, i) => {
				if (activ.lastElementChild.innerHTML == elem.text && i != containerMass[containerMass.length - 1]) {
					let a = containerMass[containerMass.length - 1];
					containerMass[containerMass.length - 1] = containerMass[i];
					activ.innerHTML = parent.lastElementChild.innerHTML;
					parent.lastElementChild.innerHTML = structElem(containerMass[i]);
					parent.lastElementChild.classList.add("activ");
					containerMass[i] = a;
					// activ.innerHTML = a;
					activ.classList.remove("activ");
				}
			});
		}
	}
	/**
	 * Для перемещения выбранного элемента в котейнер Selected
	 */
	function rightFunc() {
		let activ = document.querySelector('.activ');//получаем выбранный элемент
		if (activ != null) {
			containerMass1.forEach((elem, i) => {//проходимся по моссиву левого контейнера
				if (activ.lastElementChild.innerHTML == elem.text) {
					//добавляем объект из  containerMass1 в containerMass2
					//Удаляем выбранный элемент с левого контейнера и создаем его в правом 
					containerMass2.push(elem);
					let element = createElem(containerMass1[i]);
					containerMass1.splice(i, 1);
					element.classList.add("activ");
					list2.append(element);
					activ.classList.remove("activ");
					activ.remove();
				}
			})
		}
	}
	/**
	 * Для перемещения выбранного элемента в котейнер Available
	 */
	function leftFunc() {
		let activ = document.querySelector('.activ');
		if (activ != null) {
			containerMass2.forEach((elem, i) => {
				if (activ.lastElementChild.innerHTML == elem.text) {
					containerMass1.push(elem);
					let element = createElem(containerMass2[i]);
					containerMass2.splice(i, 1);
					element.classList.add("activ");
					list1.append(element);
					activ.classList.remove("activ");
					activ.remove();
				}
			})
		}
	}
	/**
	 * Для перемещения всех элементов в котейнер Selected
	 */
	function rightALLFunc() {
		//проходимся по всем дочерним элементам левого контейнера и удаляем их 
		while (true) {
			let elem = list1.firstElementChild;
			if (elem != null) {
				elem.remove();
			} else break;
		}
		//проходимя по массиву левого контейтн и записываем объекты в массив правого контейнера
		//создаем элементы в правом контейнере
		containerMass1.forEach((elem, i) => {
			containerMass2.push(elem);
			let element = createElem(containerMass1[i]);
			list2.append(element);
		})
		containerMass1 = [];
	}
	/**
	 * Для перемещения всех элементов в котейнер Available
	 */
	function leftALLFunc() {
		while (true) {
			let elem = list2.firstElementChild;
			if (elem != null) {
				elem.remove();
			} else break;
		}
		containerMass2.forEach((elem, i) => {
			containerMass1.push(elem);
			let element = createElem(containerMass2[i]);
			list1.append(element);
		})
		containerMass2 = [];
	}

	//Привязываем кнопкам соответствующие функции
	const reset = document.querySelector('.reset');
	const random = document.querySelector('.random');
	const upleft = document.querySelector('.up-left');
	const downleft = document.querySelector('.down-left');
	const upright = document.querySelector('.up-right');
	const downright = document.querySelector('.down-right');
	const uptwoleft = document.querySelector('.uptwo-left');
	const downtwoleft = document.querySelector('.downtwo-left');
	const uptworight = document.querySelector('.uptwo-right');
	const downtworight = document.querySelector('.downtwo-right');
	const left = document.querySelector('.left');
	const right = document.querySelector('.right');
	const leftAll = document.querySelector('.leftAll');
	const rightAll = document.querySelector('.rightAll');
	reset.addEventListener("click", resetFunc);
	random.addEventListener("click", randomFunc);
	upleft.addEventListener("click", () => up(containerMass1));
	downleft.addEventListener("click", () => down(containerMass1));
	upright.addEventListener("click", () => up(containerMass2));
	downright.addEventListener("click", () => down(containerMass2));
	uptwoleft.addEventListener("click", () => up2(containerMass1));
	downtwoleft.addEventListener("click", () => down2(containerMass1));
	uptworight.addEventListener("click", () => up2(containerMass2));
	downtworight.addEventListener("click", () => down2(containerMass2));
	left.addEventListener("click", leftFunc);
	right.addEventListener("click", rightFunc);
	leftAll.addEventListener("click", leftALLFunc);
	rightAll.addEventListener("click", rightALLFunc);
}


const contr = new Control(
	[{
			text: "Bamboo Watch",
			img: "./img/bamboo-watch.jpg"
		},
		{
			text: "Black Watch",
			img: "./img/black-watch.jpg"
		},
		{
			text: "Bracelet",
			img: "./img/bracelet.jpg"
		},
		{
			text: "Game Controller",
			img: "./img/game-controller.jpg"
		},
		{
			text: "Brown Purse",
			img: "./img/brown-purse.jpg"
		},
		{
			text: "Blue Band",
			img: "./img/blue-band.jpg"
		}
		]
)