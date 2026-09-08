







let result = {

	D: 0,

	I: 0,

	C: 0,

	N: 0,

	M: 0,

	R: 0,

	U: 0,

	G: 0,

	E: 0

}



let points = [

			[1,1,1,1,1,0,0,1,0],

			[1,1,1,1,1,1,1,1,1],

			[1,0,0,0,0,0,0,0,0],

			[1,0,1,0,0,0,0,1,0],

			[0,0,1,1,0,0,0,0,0],

			[0,0,1,1,0,0,0,0,0],

			[1,0,0,0,0,0,0,0,0],

			[0,0,1,1,0,0,0,0,0],

			[0,1,0,0,0,0,1,1,0],

			[0,0,0,0,0,0,0,1,0],

			[1,0,1,0,1,0,0,0,0],

			[1,0,1,0,1,0,0,0,0],

			[0,0,1,1,0,0,0,1,0],

			[0,0,1,1,0,0,0,0,0],

			[0,0,0,0,1,0,1,0,0],

			[0,0,1,0,0,0,0,1,1],

			[0,0,1,0,0,0,0,0,1],

			[1,1,1,1,1,1,1,1,1],

			[1,0,0,0,0,0,0,0,0],

			[1,0,1,0,0,0,0,1,0],

			[0,0,1,1,0,0,0,0,0],

			[1,1,1,1,1,1,1,1,1],

			[0,0,1,0,1,1,0,0,0],

			[0,0,1,0,1,1,0,0,0],

			[0,0,1,0,1,0,0,0,0],

			[0,1,1,1,0,0,0,0,1],

			[0,1,1,0,0,0,0,0,0],

			[0,0,1,0,0,0,0,1,0],



]



// PROGRESS



// Estilo a números y barra de progreso



let form = document.getElementById('formulario');



let linearProgressBar = document.getElementById('prrogress-bar');  // Fomas de llamar un ID del html al js.

let progressBar = document.querySelector('.circular-progress');

let valueContainer = document.querySelector('.value-container');

let linearValueContainer = document.querySelector('.linear-value-container');

let answerCounter = 0;

let answerYes = [];

let answerNo = [];



showResult();



form.addEventListener('click', (event)=>{ //escuchar el formulario.

	if(event.target.type == 'radio'){

        // Poniendo un visto al numero

		let actualNumber = event.target.offsetParent.childNodes['1']; //propiedades

		actualNumber.style.backgroundColor = '#588c39';

		actualNumber.innerHTML = `<img class="check" src="./AEV_files/check.png" alt="check">` //insertar codigo html

		answerCounter = document.querySelectorAll('.check');  //Contador de checks



        // Incrementar la barra de progreso

		increaseProgressBar(answerCounter.length);



        //Calcular resultados

        let questionNumberString = event.target.className;

        let questionNumber = Number(questionNumberString)



        let answer = event.target.labels[0].innerText;



        if(answer == 'SI' && answerYes[questionNumber-1] !=true ){

            answerYes[questionNumber-1] = true;

            answerNo[questionNumber-1] = false;

            sumPoints(points[questionNumber-1])

            // console.log('answerYes: ' + answerYes)

            // console.log('answerNo: ' + answerNo)

        }else if(answer == 'NO' && answerNo[questionNumber-1] == false){

			answerYes[questionNumber-1] = false;

			answerNo[questionNumber-1] = true;

            // console.log('answerYes: ' + answerYes)

            // console.log('answerNo: ' + answerNo)

			subtractPoints(points[questionNumber-1])

		}



        showResult();



	}

});



function sumPoints(array){

    result.D = result.D + array[0]

	result.I = result.I + array[1]

	result.C = result.C + array[2]

	result.N = result.N + array[3]

	result.M = result.M + array[4]

	result.R = result.R + array[5]

	result.U = result.U + array[6]

	result.G = result.G + array[7]

	result.E = result.E + array[8]

}



function subtractPoints(array){

    if(result.D > 0){

		result.D = result.D - array[0]

	}else{

		result.D = 0

	}



	if(result.I > 0){

		result.I= result.I - array[1]

	}else{

		result.I = 0

	}



	if(result.C > 0){

		result.C = result.C - array[2]

	}else{

		result.C = 0

	}



	if(result.N > 0){

		result.N = result.N - array[3]

	}else{

		result.N = 0

	}



	if(result.M > 0){

		result.M = result.M - array[4]

	}else{

		result.M = 0

	}



	if(result.R > 0){

		result.R = result.R - array[5]

	}else{

		result.R = 0

	}



	if(result.U > 0){

		result.U = result.U - array[6]

	}else{

		result.U = 0

	}



	if(result.G > 0){

		result.G = result.G - array[7]

	}else{

		result.G = 0

	}



	if(result.E > 0){

		result.E = result.E - array[8]

	}else{

		result.E = 0

	}



}



function showResult(){







	/*

	Digestivo 11

	Cardiovascular 7

	General 22

	Nervioso 11

	Inmunológico 10

	Resopiratorio 5

	Urinario 5

	Endócrino 11

	Estructural 6

	*/



	let DiconProgressBar = document.querySelector('#D-icon-circular-progress'); // . clases  #ides.

	let IiconProgressBar = document.querySelector('#I-icon-circular-progress');

	let CiconProgressBar = document.querySelector('#C-icon-circular-progress');

	let NiconProgressBar = document.querySelector('#N-icon-circular-progress');

	let MiconProgressBar = document.querySelector('#M-icon-circular-progress');

	let RiconProgressBar = document.querySelector('#R-icon-circular-progress');

	let UiconProgressBar = document.querySelector('#U-icon-circular-progress');

	let GiconProgressBar = document.querySelector('#G-icon-circular-progress');

	let EiconProgressBar = document.querySelector('#E-icon-circular-progress');



	let DIconCircularProgressContainer = document.querySelector('#D-icon-circular-progress-container')

	let IIconCircularProgressContainer = document.querySelector('#I-icon-circular-progress-container')

	let CIconCircularProgressContainer = document.querySelector('#C-icon-circular-progress-container')

	let NIconCircularProgressContainer = document.querySelector('#N-icon-circular-progress-container')

	let MIconCircularProgressContainer = document.querySelector('#M-icon-circular-progress-container')

	let RIconCircularProgressContainer = document.querySelector('#R-icon-circular-progress-container')

	let UIconCircularProgressContainer = document.querySelector('#U-icon-circular-progress-container')

	let GIconCircularProgressContainer = document.querySelector('#G-icon-circular-progress-container')

	let EIconCircularProgressContainer = document.querySelector('#E-icon-circular-progress-container')



	changeBackgroundColor(result.D, DIconCircularProgressContainer)

	changeBackgroundColor(result.I, IIconCircularProgressContainer)

	changeBackgroundColor(result.C, CIconCircularProgressContainer)

	changeBackgroundColor(result.N, NIconCircularProgressContainer)

	changeBackgroundColor(result.M, MIconCircularProgressContainer)

	changeBackgroundColor(result.R, RIconCircularProgressContainer)

	changeBackgroundColor(result.U, UIconCircularProgressContainer)

	changeBackgroundColor(result.G, GIconCircularProgressContainer)

	changeBackgroundColor(result.E, EIconCircularProgressContainer)







	iconIncreaseBar(DiconProgressBar, calculatePercentage(result.D, 11), result.D)

	iconIncreaseBar(IiconProgressBar, calculatePercentage(result.I, 7), result.I) //Cardiovascular

	iconIncreaseBar(CiconProgressBar, calculatePercentage(result.C, 22), result.C) //General

	iconIncreaseBar(NiconProgressBar, calculatePercentage(result.N, 11), result.N)

	iconIncreaseBar(MiconProgressBar, calculatePercentage(result.M, 10), result.M)

	iconIncreaseBar(RiconProgressBar, calculatePercentage(result.R, 5), result.R)

	iconIncreaseBar(UiconProgressBar, calculatePercentage(result.U, 5), result.U)

	iconIncreaseBar(GiconProgressBar, calculatePercentage(result.G, 11), result.G) //Endócrino

	iconIncreaseBar(EiconProgressBar, calculatePercentage(result.E, 6), result.E)



	console.log(result.D)

	console.log(result.I)

	console.log(result.C)

	console.log(result.N)

	console.log(result.M)

	console.log(result.R)

	console.log(result.U)

	console.log(result.G)

	console.log(result.E)





    // document.getElementById('resultadoD').innerHTML = calculateResultInWords(result.D);

	// document.getElementById('resultadoI').innerHTML = calculateResultInWords(result.I);

	// document.getElementById('resultadoC').innerHTML = calculateResultInWords(result.C);

	// document.getElementById('resultadoN').innerHTML = calculateResultInWords(result.N);

	// document.getElementById('resultadoM').innerHTML = calculateResultInWords(result.M);

	// document.getElementById('resultadoR').innerHTML = calculateResultInWords(result.R);

	// document.getElementById('resultadoU').innerHTML = calculateResultInWords(result.U);

	// document.getElementById('resultadoG').innerHTML = calculateResultInWords(result.G);

	// document.getElementById('resultadoE').innerHTML = calculateResultInWords(result.E);







// ESTO SI FUNCIONA

    /* document.getElementById('digestivo').innerText = `Digestivo: ${result.D}`

	document.getElementById('intestinal').innerText = `Intestinal: ${result.I}`

	document.getElementById('circulatorio').innerText = `Circulatorio: ${result.C}`

	document.getElementById('nervioso').innerText = `Nervioso: ${result.N}`

	document.getElementById('inmunologico').innerText = `Inmunológico: ${result.M}`

	document.getElementById('respiratorio').innerText = `Respiratorio: ${result.R}`

	document.getElementById('urinario').innerText = `Urinario: ${result.U}`

	document.getElementById('glandular').innerText = `Glandular: ${result.G}`

	document.getElementById('estructural').innerText = `Estructural: ${result.E}`

 */



    document.getElementById('RDigestivo').innerText = `${calculateResultInWords(result.D)}`

	document.getElementById('RIntestinal').innerText = `${calculateResultInWords(result.I)}`

	document.getElementById('RCirculatorio').innerText = `${calculateResultInWords(result.C)}`

	document.getElementById('RNervioso').innerText = `${calculateResultInWords(result.N)}`

	document.getElementById('RInmunologico').innerText = `${calculateResultInWords(result.M)}`

	document.getElementById('RRespiratorio').innerText = `${calculateResultInWords(result.R)}`

	document.getElementById('RUrinario').innerText = `${calculateResultInWords(result.U)}`

	document.getElementById('RGlandular').innerText = `${calculateResultInWords(result.G)}`

	document.getElementById('REstructural').innerText = `${calculateResultInWords(result.E)}`

}



function calculatePercentage(value, base){

	return Math.floor((100 * value) / base);

}



function changeBackgroundColor(number, element){



	let innerElement = element.firstElementChild.firstElementChild;



	if(number>=0 && number<=1){



		element.style.backgroundColor = "#588c39"

		element.style.boxShadow= "0 0 10px #588c39";

		innerElement.style.backgroundColor = "#588c39"





	}else if(number>=2 && number<=3){



		element.style.backgroundColor= "#FED140";

		element.style.boxShadow= "0 0 10px #FED140";

		innerElement.style.backgroundColor = "#FED140"



	}else if(number>=4 && number<=5){



		element.style.backgroundColor= "#f7941d";

		element.style.boxShadow= "0 0 10px #f7941d"

		innerElement.style.backgroundColor = "#f7941d"



	}else if(number>=6 ){



		element.style.backgroundColor= "#ED1B24";

		element.style.boxShadow= "0 0 10px #ED1B24";

		innerElement.style.backgroundColor = "#ED1B24"



	}

}



function iconIncreaseBar(element, porcentage, number){



	if(number>=0 && number<=1){

		element.style.transition = "all .8s ease-in-out"

		element.style.background = `conic-gradient(#fff ${porcentage*3.6}deg, #588c39 ${porcentage*3.6}deg)`;

		}else if(number>=2 && number<=3){

			element.style.transition = "all .8s ease-in-out"

		element.style.background = `conic-gradient(#fff ${porcentage*3.6}deg, #FED140 ${porcentage*3.6}deg)`;

	}else if(number>=4 && number<=5){

		element.style.transition = "all .8s ease-in-out"

		element.style.background = `conic-gradient(#fff ${porcentage*3.6}deg, #f7941d ${porcentage*3.6}deg)`;

	}else if(number>=6 ){

		element.style.transition = "all .8s ease-in-out"

		element.style.background = `conic-gradient(#fff ${porcentage*3.6}deg, #ED1B24 ${porcentage*3.6}deg)`;

	}

}



function calculateResultInWords(number){



    if(number>=0 && number<=1){

		return "Óptima"

	}

	if(number>=2 && number<=3){

		return "Buena"

	}

	if(number>=4 && number<=5){

		return "Regular"

	}

	if(number>=6 ){

		return "Deficiente"

	}



}







function increaseProgressBar(answerCounter){//contador de elementos

	let porcentage = Math.floor((100 * answerCounter) / 28); // REGLA DE TRES

	valueContainer.innerHTML = `${porcentage}<span>%</span>` //Forma de llamar una variable de Java a Html.

	progressBar.style.background = `conic-gradient(#588c39 ${porcentage*3.6}deg, #CACECF ${porcentage*3.6}deg)`;

	linearProgressBar.value = porcentage  //Propiedads del html como value.

	linearValueContainer.innerHTML = `${porcentage}<span>%</span>`

}



valueContainer.innerHTML = `${answerCounter}<span> %</span>`





// Modal de resultado

// let resultBtn = document.getElementById('resultBtn');

let acceptResultBtn = document.getElementById("acceptResultBtn");



// resultBtn.addEventListener('click', ()=>{

// 	if(answerCounter.length == 38){

// 		calculate();

// 	}else{

// 		let resultModal = document.getElementById('resultModal');

// 		resultModal.style.display = "block";//mostrar modales.

// 	}

// });





acceptResultBtn.addEventListener('click', ()=>{

	resultModal.style.display = "none"; //ocultar modal

});



// Modal Exportar

let exportBtn = document.getElementById('exportBtn');

let downloadBtn = document.getElementById('descargarBtn');

let inputName = document.getElementById('inputName');

let inputEmail = document.getElementById('inputEmail');

let nombreError = document.getElementById('nombreError');

let emailError = document.getElementById('emailError');

let inputPhone = document.getElementById('inputPhone');



function validateEmpty(valueInput, divInput, divError, nameInput ){

	if(valueInput.length == 0){

		divInput.style.border = '1px solid red';

		divError.innerHTML = `<p class="error">${nameInput} no puede estar vacío</p>`

		return false;

	}else{

		divInput.style.border = '1px solid hsl(246, 25%, 77%)';

		divError.innerHTML = '';

		return true;

	}

}



function validateEmail(valueInput, divInput, divError, nameInput){

    let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    if(regExp.test(valueInput) == true){

        divInput.style.border = '1px solid hsl(246, 25%, 77%)';

		divError.innerHTML = '';

		return true;

    }else{

        divInput.style.border = '1px solid red';

		divError.innerHTML = `<p class="error">${nameInput} está incorrecto.</p>`

		return false;

    }

}





let radioHombre = document.getElementById('hombre');

let genre;



exportBtn.addEventListener('click', ()=>{

	if(answerCounter.length == 28){                          //PRUEBAS!!



		let formModal = document.getElementById("formModal");

		formModal.style.display = 'block'



		downloadBtn.addEventListener('click', event=>{

			event.preventDefault();

			// VALIDAR SI LOS IMPUT ESTAN LLENOS

			/* if(validateEmpty(inputName.value, inputName, nombreError, 'El campo Nombre') &&

			validateEmail(inputEmail.value, inputEmail, emailError, 'El Email') == true){ */

				formModal.style.display = 'none'



				if(radioHombre.checked == true){

					genre = 'Hombre'

				}else{

					genre = 'Mujer'

				}



				console.log('Nombre: '+ inputName.value)

				console.log('Correo: '+ inputEmail.value)

				console.log('Genero: '+ genre)

				console.log('Numero: '+ inputPhone.value)



				exportarPDF();

			//}





		})















	}else{

		let resultModal = document.getElementById('resultModal');

		resultModal.style.display = "block";

	}

});





//Para disfrutar al máximo los beneficios de los productos Nature’s Sunshine, te invitamos a comenzar con una desintoxicación (Detox).

// Imprimir PDF
function exportarPDF(){
	
	//creo un nuevo documento PDF:

	const doc = new jsPDF();

	//Agrego una imagen:
	
	let imgData = "data:image/png;base64,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"

	
// Función para convertir colores hexadecimal a RGB
function hexToRgb(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

// Añade la imagen
doc.addImage(imgData, 'JPEG', 20, 10, 50, 13);

// Titulo principal
doc.setFontSize(14);
doc.setTextColor(40);
doc.setFont('Arial', 'normal');
doc.text('ANÁLISIS DE ESTILO DE VIDA', 120, 20, { align: 'center' });

// Agrega una línea divisoria
doc.setDrawColor(0);
doc.setLineWidth(1);
doc.line(20, 30, 180, 30);

// Subtitulo
doc.setFontSize(10);
doc.setFont('Arial', 'bold');
doc.text('RESULTADOS:', 20, 70);

// Agregar el nuevo texto después de la línea divisoria

// Nuevo texto
doc.setFontSize(10);
doc.setFont('Arial', 'bold');
doc.setTextColor('red');
let introText = 'Para disfrutar al máximo los beneficios de los productos Nature’s Sunshine, te invitamos a comenzar con una desintoxicación (Detox).';
let splitIntroText = doc.splitTextToSize(introText, 150); // Asegurando que el texto no exceda el ancho de la página
doc.text(splitIntroText, 20, 40); // Utiliza la variable "nextYPos" para ajustar la posición vertical del texto



doc.setFontSize(10);
doc.setFont('Arial', 'normal');
let tipsText = 'Tips para interpretar tus resultados: En Nature\'s Sunshine tenemos productos para tu bienestar, si en tus resultados encuentras "Deficiente" o "Regular" te recomendamos contactar a Daniel Miño al celular 0993348801 para que te guíe con los productos adecuados a tus necesidades.';
let splitTipsText = doc.splitTextToSize(tipsText, 150); // Asegurando que el texto no exceda el ancho de la página
doc.text(splitTipsText, 20, 50); // Ajusta el segundo argumento (50) para cambiar la posición vertical del texto

// Calcula la nueva posición Y después del texto
let lineHeight = doc.getLineHeight();
let lines = splitTipsText.length;
let nextYPos = 50 + (lines * lineHeight) + 10; // +10 para un poco de espacio después del texto

// Define los colores para cada sistema
let colors = {
  Digestivo: '#28594C',
  Cardiovascular: '#BF522D',
  'Salud General': '#D68132',
  Nervioso: '#F5CF3C',
  Inmunológico: '#1A3C4E',
  Respiratorio: '#4E5A34',
  Urinario: '#E0A7BE',
  Endócrino: '#3C7F6F',
  Estructural: '#EC8A6D'
};
let results = {
	Digestivo: calculateResultInWords(result.D),
	Cardiovascular: calculateResultInWords(result.I),
	'Salud General': calculateResultInWords(result.C),
	Nervioso: calculateResultInWords(result.N),
	Inmunológico: calculateResultInWords(result.M),
	Respiratorio: calculateResultInWords(result.R),
	Urinario: calculateResultInWords(result.U),
	Endócrino: calculateResultInWords(result.G),
	Estructural: calculateResultInWords(result.E)
  };


// Añade los resultados con sus colores correspondientes
let yPos = 75; // Se cambió de 45 a 70
for (let system in colors) {
  let rgb = hexToRgb(colors[system]);
  doc.setFillColor(rgb.r, rgb.g, rgb.b);
  doc.rect(20, yPos + 3, 5, 5, 'F'); // añade cuadro de color
  doc.setTextColor(0);
  doc.text(`${system}: ${results[system]}`, 30, yPos + 7);
  yPos += 8;
}
// Restaura color del texto para la información del usuario
doc.setTextColor(0);





// Añade información de usuario
let pageHeight = doc.internal.pageSize.height;
let userTextY = pageHeight - 20; // Acercamos aún más los datos de usuario al borde del documento

// Añade la invitación y el eslogan
let pageWidth = 210; // Ancho de la página
let inviteTextY = userTextY - 70; // Ajustamos la altura del rectángulo
let inviteText = "Te invitamos a contactarte con Daniel Miño al celular 0993348801 para obtener la recomendación de productos adecuados para ti.";
let sloganText = '"La naturaleza tiene las respuestas, nosotros las encapsulamos."';

doc.setFontSize(10);
doc.setFont('helvetica', 'normal');
doc.setTextColor(0);
doc.setDrawColor(0);
doc.setFillColor(233, 236, 239);  // Color de relleno gris claro

let rectWidth = 160;
let rectX = (pageWidth - rectWidth) / 2; // Centra el rectángulo horizontalmente en el documento
doc.roundedRect(rectX, inviteTextY, rectWidth, 30, 3, 3, 'FD');  // Ajustamos la altura del rectángulo

let splitInviteText = doc.splitTextToSize(inviteText, 150);
let longestLineInvite = splitInviteText.reduce((max, line) => Math.max(max, doc.getStringUnitWidth(line)), 0);
let inviteTextWidth = longestLineInvite * doc.internal.getFontSize() / doc.internal.scaleFactor;
let inviteTextX = rectX + (rectWidth - inviteTextWidth) / 2; // centra horizontalmente el texto en el rectángulo
doc.text(splitInviteText, inviteTextX, inviteTextY + 10);  // Añade el texto de la invitación

doc.setFont('Montserrat', 'italic'); 
doc.setFontSize(12);  
doc.setTextColor(0, 128, 0);
let splitSloganText = doc.splitTextToSize(sloganText, 150);
let sloganTextWidth = doc.getStringUnitWidth(sloganText) * doc.internal.getFontSize() / doc.internal.scaleFactor;
let sloganTextX = rectX + (rectWidth - sloganTextWidth) / 2; // centra horizontalmente el eslogan en el rectángulo
doc.text(splitSloganText, sloganTextX, inviteTextY + 30 - 5);  // Añade el eslogan un poco más arriba del borde inferior del rectángulo

doc.setFont('helvetica', 'normal'); 
doc.setFontSize(10);  
doc.setTextColor(0);





// Configuración inicial
doc.setFontSize(12);
doc.setDrawColor(0);
doc.setFillColor(220, 220, 220);

// Define la sección del enlace
let linkSectionYStart = 240; 
let linkSectionHeight = 30; // Reducir la altura del rectángulo
let linkSectionYEnd = linkSectionYStart + linkSectionHeight;
let linkSectionXStart = (pageWidth - rectWidth) / 2;
let linkSectionXEnd = linkSectionXStart + rectWidth;

// Dibuja el rectángulo de la sección de enlaces
doc.roundedRect(linkSectionXStart, linkSectionYStart, rectWidth, linkSectionHeight, 3, 3, 'FD');

// Configura y agrega el texto informativo
doc.setFont('courier', 'italic');
doc.setFontSize(8);
let instructions = 'Haz clic en la primera letra del país que deseas consultar o comunicate con Daniel Miño al celular 0993348801 para que te comparta el Catálogo de productos disponibles.';
let instructionsSplit = doc.splitTextToSize(instructions, rectWidth - 20);
doc.text(instructionsSplit, linkSectionXStart + 10, linkSectionYStart + 10);

    
// Restablece la configuración del documento
doc.setFont('helvetica', 'normal');
doc.setFontSize(10);
doc.setTextColor(0);






// Añade información de usuario
doc.text(`Nombre: ${inputName.value}`, 20, userTextY);
doc.text(`Correo: ${inputEmail.value}`, 20, userTextY + 7); // Acercamos los datos de usuario entre sí
doc.text(`Teléfono: ${inputPhone.value} `, 20, userTextY + 11.5); // Acercamos los datos de usuario entre sí
doc.text(`Género: ${genre}`, 20, userTextY + 16); // Acercamos los datos de usuario entre sí

// Agrega fecha
let actualDate = new Date();
let months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
let dateString = `${actualDate.getDate()} / ${months[actualDate.getMonth()]} / ${actualDate.getFullYear()}`;
doc.setTextColor(80);
doc.text(`Fecha: ${dateString}`, 150, pageHeight - 10);



// Agrega catálogo de colores en la parte derecha
doc.setFontSize(10);
doc.setTextColor(0);
doc.setFont('Arial', 'bold');
doc.text('CATÁLOGO DE COLORES', 120, 70);
let yCatalog = 75;
for (let system in colors) {
    let rgb = hexToRgb(colors[system]);
    doc.setFillColor(rgb.r, rgb.g, rgb.b);
    doc.rect(120, yCatalog, 60, 10, 'F'); // Añade rectángulo de color al catálogo
    let textWidth = doc.getStringUnitWidth(system) * doc.internal.getFontSize() / doc.internal.scaleFactor;
    let textOffset = (60 - textWidth) / 2;
    doc.setTextColor(255, 255, 255);  // Define el color del texto en blanco
    doc.text(system, 120 + textOffset, yCatalog + 7);  // Posiciona el texto centrado en el rectángulo
    yCatalog += 12;  // Ajusta la separación entre los rectángulos
}



// NUEVO: Añade la tabla de países al final del documento
var countries = [
	{countryCode: 'Colombia', url: 'https://dpm.mynsp.com'},
	{countryCode: 'Ecuador', url: 'https://dpm.mynsp.com'},
	{countryCode: 'Guatemala', url: 'https://dpm.mynsp.com'},
	{countryCode: 'México', url: 'https://dpm.mynsp.com'},
	
];

let docDefinition = {
    content: [
        // Para agregar una imagen, necesitarías convertir la imagen a Base64 y luego agregarla de la siguiente manera:
        // { image: 'data:image/jpeg;base64,...' },

		{
			image: imgData,
			width: 100,  // ajusta esto para cambiar el tamaño de la imagen
			alignment: 'center'
		},
        // Para agregar texto:
        { text: 'ANÁLISIS DE ESTILO DE VIDA', style: 'header' },

        // Para agregar una línea:
        { canvas: [ { type: 'line', x1: 0, y1: 0, x2: 520, y2: 0, lineWidth: 2 } ] },

		
		
		{
            text: 'Tips para interpretar tus resultados: En Nature\'s Sunshine tenemos productos para tu bienestar, si en tus resultados encuentras "Deficiente" o "Regular" te recomendamos contactar a Daniel Miño al celular 0993348801 para que te guíe con los productos adecuados a tus necesidades.',
            fontSize: 12,
            margin: [0, 30, 0, 0], // margen: [izquierda, arriba, derecha, abajo]
			style: 'invitationText'

        },

		{
            text: 'Para disfrutar al máximo los beneficios de los productos Nature’s Sunshine, te invitamos a comenzar con una desintoxicación (Detox).',
            margin: [20, 10, 20, 0], // margen: [izquierda, arriba, derecha, abajo]
			style: 'slogan'
        },
		{
            text: '\n'
        },
		{
            text: '\n'
        },
		{
            text: '\n'
        },
		{
            text: '\n'
        },
		

		{
            columns: [
				[
                    { text: 'RESULTADOS: ', style: 'subheader' },
					{
						text: '\n'
					},
                    {
                        table: {
                            widths: [10, '*'],
                            body: Object.keys(colors).map(function(system) {
                                return [
                                    { text: ' ', fillColor: colors[system] },
                                    { text: `${system}: ${results[system]}`, color: '#000000' }
                                ];
                            })
                        },
                        layout: 'noBorders',
                    },
                ],
                [
                    { text: 'CATÁLOGO DE COLORES: ', style: 'subheader' },
					{
						text: '\n'
					},

                    {
                        table: {
                            widths: [30, 100],  // Ajusta estos valores para cambiar el ancho de la tabla
                            body: Object.keys(colors).map(function(system) {
                                return [
                                    { text: ' ', fillColor: colors[system] },
                                    { text: system, fillColor: colors[system], color: '#ffffff' }
                                ];
                            })
                        },
                        layout: 'noBorders',
                    },
                ],
               
            ],
        },
		{
            text: '\n'
        },
		{
            text: '\n'
        },
		
		

         // Texto de invitación
		 {
			text: 'Te sugerimos visitar la página web de Nature\'s Sunshine para explorar las opciones de productos que podrían ser adecuadas para ti.',
			style: 'invitationText'
		},

        // Espaciado entre el texto de invitación y el slogan
        {
            text: '\n'
        },

        // Slogan
        {
            text: '"La naturaleza tiene las respuestas, nosotros las encapsulamos."',
            style: 'slogan'
        },
		{
            text: '\n'
        },
        // Al final, agregamos la tabla de países
        {
			//text: '',
			//pageBreak: 'before',
		},
		{
			table: {
				widths: [ '*', '*' ],
				body: [
					[{text: 'País', style: 'tableHeader'}, {text: 'Dirección Web', style: 'tableHeader'}],
					...countries.map(function(country) {
						return [ {text: country.countryCode, style: 'tableBody'}, {text: country.url, link: country.url, style: 'tableBody'} ];
					}),
				]
			}
		},

		{
            text: '\n'
        },
		{
            text: '\n'
        },
		{
            text: '\n'
        },
		

		// Información del usuario
        { text: `Nombre: ${inputName.value}`, style: 'userInfo' },
        { text: `Correo: ${inputEmail.value}`, style: 'userInfo' },
        { text: `Teléfono: ${inputPhone.value}`, style: 'userInfo' },
        { text: `Género: ${genre}`, style: 'userInfo' },
		
		// Fecha actual
		{ text: `Fecha: ${dateString}`, style: 'dateInfo', alignment: 'right' },
 
    ],
	/*footer: function(currentPage, pageCount) {
        return {
            table: {
                widths: [100, '*'],
                body: [
                    ['Nombre', inputName.value],
                    ['Correo', inputEmail.value],
                    ['Teléfono', inputPhone.value],
                    ['Género', genre],
                    ['Fecha', dateString]
                ]
            },
            layout: 'noBorders',
        };
    },*/
    styles: {

		invitationText: {
            fontSize: 12,
            bold: true,
            alignment: 'center',
            margin: [0, 20, 0, 0]  // margen superior de 20 para separar del contenido anterior
        },
        slogan: {
            fontSize: 12,
            italics: true,
            alignment: 'center',
            color: 'green'  // puedes cambiar este color al que prefieras
        },

		userInfo: {
            fontSize: 10,
            margin: [0, 0, 0, 0],  // Añade un margen inferior para separar las líneas
            // Aquí puedes añadir más estilos si quieres...
        },
        dateInfo: {
            fontSize: 10,
            alignment: 'right',
            // Aquí puedes añadir más estilos si quieres...
        },
        header: {
            fontSize: 14,
            bold: true,
            alignment: 'center',
            margin: [0, 0, 0, 10]
        },
    
        tableHeader: {
            bold: true,
            fontSize: 13,
            color: 'black'
        },
        tableBody: {
            fontSize: 12,
        }
    }
	
};


//Guardo documento

//	doc.save(`${inputName.value}_Natures_Sunshine_AEV.pdf`);



pdfMake.createPdf(docDefinition).download(`${inputName.value}_Natures_Sunshine_AEV.pdf`);

}


	
