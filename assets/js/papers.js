fetch('assets/papers.txt')
    .then(response => response.text())
    .then(data => {
        const papers = data.split('\n').map(line => line.split('|'));

        // 테이블에 내용 추가
        const tableBody = document.getElementById('table-body');
        papers.forEach((paper, index) => {
            const [paperClass, title, journal, date] = paper;
            const row = `
                <tr>
                    <td class="tg-73oq">${index + 1}</td>
                    <td class="tg-73oq">${paperClass}</td>
                    <td class="tg-73oq">${title}</td>
                    <td class="tg-73oq">${journal}</td>
                    <td class="tg-73oq">${date}</td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    })
    .catch(error => console.error('Error fetching data:', error));