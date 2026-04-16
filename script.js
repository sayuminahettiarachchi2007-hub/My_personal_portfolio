function openModal(project) {

    let content = "";

    if (project === "p1") {
        content = `
            <h2>Calculator in C</h2>
            <p>This project is a simple calculator built using C programming. It performs basic arithmetic operations like addition, subtraction, multiplication, and division.</p>
        `;
    }
    else if (project === "p2") {
        content = `
            <h2>Student Management System</h2>
            <p>This system is built using C programming to store, update, and manage student records efficiently.</p>
        `;
    }
    else if (project === "p3") {
        content = `
            <h2>IoT Smart Dustbin</h2>
            <p>This project uses ESP32 and sensors to automatically open the dustbin when a person comes near it.</p>
        `;
    }

    // Create modal box
    let modal = document.createElement("div");
    modal.classList.add("modal");

    modal.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="closeModal()">&times;</span>
            ${content}
        </div>
    `;

    document.body.appendChild(modal);
}

// Close modal function
function closeModal() {
    let modal = document.querySelector(".modal");
    if (modal) {
        modal.remove();
    }
}
function toggleContact() {
    var x = document.getElementById("contactDetails");

    if (x.style.display === "none" || x.style.display === "") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}