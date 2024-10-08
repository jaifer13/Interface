const textInput = document.getElementById('textInput');
const addButton = document.getElementById('addButton');
const fontSizeSlider = document.getElementById('fontSizeSlider');
const canvas = document.querySelector('.canvas');
const clearButton = document.getElementById('clearButton');
const colorPicker = document.getElementById('colorPicker');
const positionButtons = document.querySelectorAll('.position-button');
const imageUpload = document.getElementById('imageUpload');
const addImageBtn = document.getElementById('addImage');
const imageStatus = document.getElementById('imageStatus'); // Elemento para mostrar o status da imagem

// Função para adicionar um novo parágrafo com o texto e estilo selecionado dentro da canvas
function addNewText() {
    const newElement = document.createElement('p');
    newElement.textContent = textInput.value;
    newElement.style.fontSize = fontSizeSlider.value + 'px';
    newElement.style.color = colorPicker.value;
    newElement.style.textAlign = positionButtons[0].dataset.position;

    canvas.appendChild(newElement);
    textInput.value = "";
}

// Evento de click no botão "Adicionar"
addButton.addEventListener('click', addNewText);

// Evento de click no botão "Limpar"
clearButton.addEventListener('click', () => {
    canvas.innerHTML = '';
    imageUpload.value = ''; // Limpa o valor do input de imagem
    imageStatus.textContent = 'Nenhum arquivo escolhido'; // Atualiza o status da imagem
});

// Evento de mudança na seleção de cor
colorPicker.addEventListener('input', (event) => {
    const allTextElements = canvas.querySelectorAll('p');
    allTextElements.forEach(element => {
        element.style.color = event.target.value;
    });
});

// Evento de click nos botões de posição
positionButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const allTextElements = canvas.querySelectorAll('p');
        allTextElements.forEach(element => {
            element.style.textAlign = event.target.dataset.position;
        });
    });
});

// Evento de click no botão "Adicionar Imagem"

// Evento de click no botão "Adicionar Imagem"
addImageBtn.addEventListener('click', () => {
    const file = imageUpload.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.classList.add('responsive-image');

            // Limpa qualquer imagem anterior no canvas
            canvas.innerHTML = '';
            
            // Adiciona a nova imagem ao canvas
            canvas.appendChild(img);
        };
        reader.readAsDataURL(file);
    } else {
        console.warn("Nenhuma imagem selecionada");
    }
});


