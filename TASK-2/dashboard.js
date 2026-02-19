document.addEventListener("DOMContentLoaded", loadStudents);

function loadStudents(){

    const sort = document.getElementById("sortSelect").value;
    const dept = document.getElementById("filterDept").value;

    fetch(`http://localhost:3000/students?sort=${sort}&dept=${dept}`)
    .then(res => res.json())
    .then(data => {

        const tbody = document.querySelector("#studentTable tbody");
        tbody.innerHTML = "";

        data.students.forEach(stu => {
            const row = `
                <tr>
                    <td>${stu.NAME}</td>
                    <td>${stu.DOB.split("T")[0]}</td>
                    <td>${stu.EMAIL}</td>
                    <td>${stu.DEPT}</td>
                    <td>${stu.PHNO}</td>
                </tr>
            `;
            tbody.innerHTML += row;
        });

        const deptCount = document.getElementById("deptCount");
        deptCount.innerHTML = "";

        data.counts.forEach(c => {
            deptCount.innerHTML += `<li>${c.DEPT} : ${c.total}</li>`;
        });

    })
    .catch(err => console.error(err));
}
