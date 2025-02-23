// Функція для збереження даних у LocalStorage
function saveDataToLocalStorage(data) {
    let records = JSON.parse(localStorage.getItem('studentRecords')) || [];
    records.push(data);
    localStorage.setItem('studentRecords', JSON.stringify(records));
}

// Функція для завантаження даних з LocalStorage
function loadDataFromLocalStorage() {
    return JSON.parse(localStorage.getItem('studentRecords')) || [];
}

// Функція для видалення запису
function deleteRecord(index) {
    let records = loadDataFromLocalStorage();
    records.splice(index, 1);
    localStorage.setItem('studentRecords', JSON.stringify(records));
    renderTable();
}

// Функція для відображення даних у таблиці
function renderTable() {
    let records = loadDataFromLocalStorage();
    let tableBody = document.querySelector('#gradesTable tbody');
    tableBody.innerHTML = '';

    records.forEach((record, index) => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${record.fullName}</td>
            <td>${record.subject}</td>
            <td>${record.grade}</td>
            <td>${record.date}</td>
            <td>
                <button onclick="deleteRecord(${index})">Видалити</button>
            </td>`;
        tableBody.appendChild(row);
    });
}

// Функція для експорту даних у JSON
function exportToJSON() {
    const records = loadDataFromLocalStorage();
    const jsonString = JSON.stringify(records, null, 4);

    // Створити файл та запропонувати його для завантаження
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'studentRecords.json';
    a.click();
    URL.revokeObjectURL(url);
}

// Функція для експорту даних у XML
function exportToXML() {
    const records = loadDataFromLocalStorage();
    let xmlString = '<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/css" href=""?>\n<students>\n';

    records.forEach(record => {
        xmlString += '  <student>\n';
        xmlString += `    <fullName>${record.fullName}</fullName>\n`;
        xmlString += `    <studentId>${record.studentId}</studentId>\n`;
        xmlString += `    <faculty>${record.faculty}</faculty>\n`;
        xmlString += `    <specialty>${record.specialty}</specialty>\n`;
        xmlString += `    <course>${record.course}</course>\n`;
        xmlString += `    <group>${record.group}</group>\n`;
        xmlString += `    <subject>${record.subject}</subject>\n`;
        xmlString += `    <grade>${record.grade}</grade>\n`;
        xmlString += `    <date>${record.date}</date>\n`;
        xmlString += '  </student>\n';
    });

    xmlString += '</students>';

    // Створити файл та запропонувати його для завантаження
    const blob = new Blob([xmlString], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'StudentRecord.xml';
    a.click();
    URL.revokeObjectURL(url);
}

// Обробка події відправки форми
document.getElementById('studentForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let formData = {
        fullName: document.getElementById('fullName').value,
        studentId: document.getElementById('studentId').value,
        faculty: document.getElementById('faculty').value,
        specialty: document.getElementById('specialty').value,
        course: document.getElementById('course').value,
        group: document.getElementById('group').value,
        subject: document.getElementById('subject').value,
        grade: document.getElementById('grade').value,
        date: document.getElementById('date').value
    };

    saveDataToLocalStorage(formData);
    renderTable();
    this.reset(); // Очистити форму після збереження
});

// Завантажити дані при завантаженні сторінки
window.onload = renderTable;