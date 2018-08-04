var fields = [
    document.querySelector('#date'),
    document.querySelector('#description'),
    document.querySelector('#amount')
];
console.log(fields);

var tbody = document.querySelector('table tbody'); 

document.querySelector('.form').addEventListener('submit', function(event) {
    event.preventDefault();

    let line = document.createElement('tr');
    
    fields.forEach(function(field){
        let column = document.createElement('td');
        column.textContent = field.value;
        line.appendChild(column);
    });

    tbody.appendChild(line);

    fields[0].value = '';
    fields[1].value = '';
    fields[2].value = 0.0;

    fields[0].focus();

});
