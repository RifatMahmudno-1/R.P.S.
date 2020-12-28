var player;
var computer;
var plscore = 0;
var pcscore = 0;
var psimg = document.querySelector('.psimg');
var csimg = document.querySelector('.csimg');
var Inp = document.querySelector(".inp");
var rpc = document.querySelector('.rpcimg');
rpc.style.display = 'none';
document.querySelector(".btn").addEventListener("click", function () {
	if (Inp.value > 0 && Inp.value <= 100) {
		document.querySelector(".rpcimg").style.display = 'grid';
		document.querySelector(".btn").style.display = "none";
		document.querySelector(".endpoint").style.display = "none";
		document.querySelector(".h1al").style.display = 'none';
	} else {
		document.querySelector(".h1al").style.display = 'block';
	}
});

document.querySelector(".btn-1").addEventListener("click", function () {
	player = 1;
	image(); main(); final(); input();
});

document.querySelector(".btn-2").addEventListener("click", function () {
	player = 2;
	image(); main(); final(); input();

});

document.querySelector(".btn-3").addEventListener("click", function () {
	player = 3;
	image(); main(); final(); input();

});

function image() {
	//var finish = document.querySelector(".inp").value;
	computer = Math.floor(Math.random() * 3 + 1);
	psimg.src = "dice-" + player + ".png";
	csimg.src = "dice-" + computer + ".png";
	document.querySelector('.draw').style.display = 'none';
}

function main() {
	if (player == 1 && computer == 2) {
		pcscore++;
	} else if (player == 2 && computer == 1) {
		plscore++;
	} else if (player == 3 && computer == 2) {
		plscore++;
	} else if (player == 2 && computer == 3) {
		pcscore++;
	} else if (player == 1 && computer == 3) {
		plscore++;
	} else if (player == 3 && computer == 1) {
		pcscore++;
	} else {
		document.querySelector('.draw').style.display = 'block';
	}
}

function final() {
	if (plscore == Inp.value) {
		document.querySelector('.win_pl').style.display = 'block'
		rpc.style.display = 'none';
	} else if (pcscore == Inp.value) {
		document.querySelector('.win_pc').style.display = 'block'
		rpc.style.display = 'none';
	}
};

function input() {
	document.querySelector('.splayer').textContent = plscore;
	document.querySelector('.scomputer').textContent = pcscore;
	if (player == computer) {
		document.querySelector('.draw').style.display = 'block';
	};
}