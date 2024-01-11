const input = document.getElementById('input');
const listContainer = document.querySelector('.groceries')
document.addEventListener('keydown', function(event) {
    if(event.key == 'Enter') {
        const listText = input.value;
        const newItem = document.createElement('div');
        newItem.classList.add('items');
        newItem.textContent = listText;

        if(listText != '') {
            listContainer.append(newItem);
        }

        input.value = '';

        newItem.addEventListener('click', function() {
            newItem.classList.toggle('done');
        })
    }
}) 
